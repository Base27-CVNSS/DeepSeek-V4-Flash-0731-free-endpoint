import {
  listProviders,
  normalizePayloadForProvider,
  parseModelSelector,
  providerHeaders,
  resolveProviderModel
} from "./providers.js";

const circuits = new Map();
let roundRobinCursor = 0;

const RETRYABLE_STATUS = new Set([401, 402, 403, 404, 408, 409, 429, 500, 502, 503, 504, 529]);

function numericEnv(env, key, fallback, min, max) {
  const value = Number(env[key]);
  if (!Number.isFinite(value)) return fallback;
  return Math.min(max, Math.max(min, value));
}

function retryAfterMs(response, now) {
  const raw = response.headers.get("Retry-After");
  if (!raw) return 30_000;
  const seconds = Number(raw);
  if (Number.isFinite(seconds)) return Math.max(1_000, seconds * 1_000);
  const date = Date.parse(raw);
  return Number.isFinite(date) ? Math.max(1_000, date - now) : 30_000;
}

function circuitDuration(status, response, now) {
  if (status === 429) return Math.min(retryAfterMs(response, now), 15 * 60_000);
  if ([401, 402, 403, 404].includes(status)) return 10 * 60_000;
  return 30_000;
}

function circuitIsOpen(providerId, now) {
  const state = circuits.get(providerId);
  return Boolean(state && state.until > now);
}

function openCircuit(providerId, status, response, now, reason) {
  circuits.set(providerId, {
    until: now + circuitDuration(status, response, now),
    status,
    reason
  });
}

function orderedPool(pool) {
  if (pool.length < 2) return pool;
  const start = roundRobinCursor % pool.length;
  roundRobinCursor = (roundRobinCursor + 1) % Number.MAX_SAFE_INTEGER;
  return [...pool.slice(start), ...pool.slice(0, start)];
}

async function safeErrorMessage(response) {
  try {
    const text = await response.text();
    if (!text) return `HTTP ${response.status}`;
    const parsed = JSON.parse(text);
    const message = parsed?.error?.message || parsed?.message || text;
    return String(message).slice(0, 240);
  } catch {
    return `HTTP ${response.status}`;
  }
}

async function fetchWithTimeout(fetchImpl, url, init, timeoutMs) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort("upstream timeout"), timeoutMs);
  try {
    return await fetchImpl(url, { ...init, signal: controller.signal });
  } finally {
    clearTimeout(timer);
  }
}

export async function routeChatCompletion(payload, env = {}, options = {}) {
  const fetchImpl = options.fetchImpl || fetch;
  const now = options.now || Date.now();
  const selector = parseModelSelector(payload.model);
  const timeoutMs = numericEnv(env, "UPSTREAM_TIMEOUT_MS", 60_000, 5_000, 180_000);

  const candidates = listProviders(env)
    .filter((provider) => provider.configured)
    .map((provider) => ({ provider, model: resolveProviderModel(provider, selector) }))
    .filter(({ model }) => Boolean(model));

  const targetExists = !selector.providerId || candidates.some(({ provider }) => provider.id === selector.providerId);
  if (!targetExists) {
    return {
      error: {
        status: 400,
        code: "provider_not_configured",
        message: `Provider '${selector.providerId}' is not configured or has no model mapping.`
      },
      attempts: []
    };
  }

  if (!candidates.length) {
    return {
      error: {
        status: 503,
        code: "no_provider_configured",
        message: "Configure at least one provider API key on the gateway."
      },
      attempts: []
    };
  }

  const healthy = candidates.filter(({ provider }) => !circuitIsOpen(provider.id, now));
  const pool = orderedPool(healthy.length ? healthy : candidates);
  const maxAttempts = numericEnv(env, "MAX_PROVIDER_ATTEMPTS", 5, 1, pool.length);
  const attempts = [];

  for (const { provider, model } of pool.slice(0, maxAttempts)) {
    const upstreamPayload = normalizePayloadForProvider(payload, provider, model);
    const startedAt = Date.now();

    try {
      const response = await fetchWithTimeout(
        fetchImpl,
        `${provider.baseUrl}/chat/completions`,
        {
          method: "POST",
          headers: providerHeaders(provider, env),
          body: JSON.stringify(upstreamPayload)
        },
        timeoutMs
      );

      const latencyMs = Date.now() - startedAt;
      if (response.ok) {
        circuits.delete(provider.id);
        attempts.push({ provider: provider.id, model, status: response.status, latencyMs });
        return { response, provider, model, attempts };
      }

      const message = await safeErrorMessage(response);
      attempts.push({ provider: provider.id, model, status: response.status, latencyMs, message });

      if (!RETRYABLE_STATUS.has(response.status)) {
        return {
          error: { status: response.status, code: "upstream_rejected_request", message },
          attempts
        };
      }

      openCircuit(provider.id, response.status, response, now, message);
    } catch (error) {
      const latencyMs = Date.now() - startedAt;
      const message = error?.name === "AbortError" ? "Upstream request timed out." : String(error?.message || error);
      attempts.push({ provider: provider.id, model, status: 0, latencyMs, message: message.slice(0, 240) });
      const synthetic = new Response(null, { status: 503 });
      openCircuit(provider.id, 503, synthetic, now, message);
    }
  }

  return {
    error: {
      status: 503,
      code: "all_providers_unavailable",
      message: "Every configured provider is unavailable, rate-limited, or out of quota."
    },
    attempts
  };
}

export function providerStatus(env = {}, now = Date.now()) {
  return listProviders(env).map((provider) => {
    const circuit = circuits.get(provider.id);
    return {
      id: provider.id,
      name: provider.label,
      configured: provider.configured,
      available: provider.configured && !(circuit && circuit.until > now),
      circuitUntil: circuit?.until > now ? new Date(circuit.until).toISOString() : null,
      lastStatus: circuit?.status || null,
      docs: provider.docs
    };
  });
}

export function resetRouterState() {
  circuits.clear();
  roundRobinCursor = 0;
}
