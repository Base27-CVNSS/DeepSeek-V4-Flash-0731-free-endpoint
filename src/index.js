import { VIRTUAL_MODELS } from "./providers.js";
import { providerStatus, routeChatCompletion } from "./router.js";

const rateBuckets = new Map();

function numberSetting(env, key, fallback, min, max) {
  const value = Number(env[key]);
  if (!Number.isFinite(value)) return fallback;
  return Math.min(max, Math.max(min, value));
}

function json(data, status = 200, headers = {}) {
  return new Response(JSON.stringify(data, null, 2), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8", ...headers }
  });
}

function allowedOrigin(request, env) {
  const origin = request.headers.get("Origin");
  const configured = String(env.ALLOWED_ORIGINS || "*")
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean);

  if (!origin) return null;
  if (configured.includes("*")) return "*";
  return configured.includes(origin) ? origin : null;
}

function corsHeaders(request, env) {
  const origin = allowedOrigin(request, env);
  return origin
    ? {
        "Access-Control-Allow-Origin": origin,
        "Access-Control-Allow-Headers": "Authorization, Content-Type",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        Vary: "Origin"
      }
    : {};
}

function bearerToken(request) {
  const value = request.headers.get("Authorization") || "";
  return value.startsWith("Bearer ") ? value.slice(7) : "";
}

function authorized(request, env) {
  if (!env.GATEWAY_TOKEN) return true;
  return bearerToken(request) === env.GATEWAY_TOKEN;
}

function clientIp(request) {
  return request.headers.get("CF-Connecting-IP") || request.headers.get("X-Forwarded-For")?.split(",")[0]?.trim() || "local";
}

function consumeRateLimit(request, env, now = Date.now()) {
  const rpm = numberSetting(env, "PUBLIC_RPM", 30, 1, 10_000);
  const capacity = numberSetting(env, "PUBLIC_BURST", 20, 1, 10_000);
  const refillPerMs = rpm / 60_000;
  const key = clientIp(request);
  const previous = rateBuckets.get(key) || { tokens: capacity, updatedAt: now };
  const replenished = Math.min(capacity, previous.tokens + (now - previous.updatedAt) * refillPerMs);

  if (replenished < 1) {
    const retryAfter = Math.max(1, Math.ceil((1 - replenished) / refillPerMs / 1_000));
    rateBuckets.set(key, { tokens: replenished, updatedAt: now });
    return { allowed: false, retryAfter };
  }

  rateBuckets.set(key, { tokens: replenished - 1, updatedAt: now });
  return { allowed: true, remaining: Math.floor(replenished - 1) };
}

function validateChatPayload(payload) {
  if (!payload || typeof payload !== "object") return "Body must be a JSON object.";
  if (!Array.isArray(payload.messages) || payload.messages.length === 0) return "messages must be a non-empty array.";
  if (payload.messages.length > 200) return "messages exceeds the 200-message safety limit.";
  for (const message of payload.messages) {
    if (!message || typeof message !== "object" || typeof message.role !== "string") {
      return "Every message must contain a role.";
    }
  }
  return null;
}

function proxiedResponse(upstream, request, env, metadata) {
  const headers = new Headers(upstream.headers);
  headers.delete("set-cookie");
  headers.delete("access-control-allow-origin");
  headers.delete("access-control-allow-credentials");
  for (const [key, value] of Object.entries(corsHeaders(request, env))) headers.set(key, value);
  headers.set("X-Base27-Provider", metadata.provider.id);
  headers.set("X-Base27-Model", metadata.model);
  headers.set("X-Base27-Attempts", String(metadata.attempts.length));
  return new Response(upstream.body, { status: upstream.status, statusText: upstream.statusText, headers });
}

async function handleChat(request, env) {
  const cors = corsHeaders(request, env);
  if (!authorized(request, env)) {
    return json({ error: { code: "unauthorized", message: "Invalid gateway token." } }, 401, cors);
  }

  const limit = consumeRateLimit(request, env);
  if (!limit.allowed) {
    return json(
      { error: { code: "gateway_rate_limit", message: "Gateway rate limit exceeded." } },
      429,
      { ...cors, "Retry-After": String(limit.retryAfter) }
    );
  }

  const contentLength = Number(request.headers.get("Content-Length") || 0);
  if (contentLength > 1_048_576) {
    return json({ error: { code: "payload_too_large", message: "Request body exceeds 1 MiB." } }, 413, cors);
  }

  let payload;
  try {
    payload = await request.json();
  } catch {
    return json({ error: { code: "invalid_json", message: "Request body is not valid JSON." } }, 400, cors);
  }

  const validationError = validateChatPayload(payload);
  if (validationError) {
    return json({ error: { code: "invalid_request", message: validationError } }, 400, cors);
  }

  const result = await routeChatCompletion(payload, env);
  if (result.response) return proxiedResponse(result.response, request, env, result);

  return json({ error: result.error, attempts: result.attempts }, result.error.status, cors);
}

function handleModels(request, env) {
  const configured = providerStatus(env).filter((provider) => provider.configured).map((provider) => provider.id);
  return json(
    {
      object: "list",
      data: VIRTUAL_MODELS.map((model) => ({
        id: model.id,
        object: "model",
        created: 0,
        owned_by: "base27-router",
        purpose: model.purpose
      })),
      configured_providers: configured
    },
    200,
    corsHeaders(request, env)
  );
}

function handleStatus(request, env) {
  const providers = providerStatus(env);
  const configured = providers.filter((provider) => provider.configured).length;
  return json(
    {
      status: configured ? "ready" : "configuration_required",
      app: env.APP_NAME || "Base27 Free LLM Router",
      configuredProviders: configured,
      providers,
      upstreamPolicy: "BYOK free tiers; quota-aware failover; no key or IP rotation",
      retiredOrigin: "victor/DeepSeek-V4-Flash-0731-free-endpoint"
    },
    configured ? 200 : 503,
    corsHeaders(request, env)
  );
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: corsHeaders(request, env) });
    if (url.pathname === "/health" && request.method === "GET") return handleStatus(request, env);
    if (url.pathname === "/api/status" && request.method === "GET") return handleStatus(request, env);
    if (url.pathname === "/v1/models" && request.method === "GET") return handleModels(request, env);
    if (url.pathname === "/v1/chat/completions" && request.method === "POST") return handleChat(request, env);

    if (env.ASSETS) return env.ASSETS.fetch(request);
    return json({ error: { code: "not_found", message: "Route not found." } }, 404);
  }
};

export { consumeRateLimit, validateChatPayload };
