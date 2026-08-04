const PROVIDER_DEFINITIONS = [
  {
    id: "openrouter",
    label: "OpenRouter Free Router",
    secret: "OPENROUTER_API_KEY",
    baseUrl: "https://openrouter.ai/api/v1",
    models: {
      auto: "openrouter/free",
      fast: "openrouter/free",
      reasoning: "openrouter/free",
      coding: "openrouter/free"
    },
    docs: "https://openrouter.ai/docs/guides/routing/routers/free-router"
  },
  {
    id: "groq",
    label: "Groq",
    secret: "GROQ_API_KEY",
    baseUrl: "https://api.groq.com/openai/v1",
    models: {
      auto: "llama-3.3-70b-versatile",
      fast: "llama-3.1-8b-instant",
      reasoning: "openai/gpt-oss-120b",
      coding: "openai/gpt-oss-120b"
    },
    docs: "https://console.groq.com/docs/openai"
  },
  {
    id: "gemini",
    label: "Google AI Studio",
    secret: "GEMINI_API_KEY",
    baseUrl: "https://generativelanguage.googleapis.com/v1beta/openai",
    models: {
      auto: "gemini-3.6-flash",
      fast: "gemini-3.6-flash",
      reasoning: "gemini-3.6-flash",
      coding: "gemini-3.6-flash"
    },
    docs: "https://ai.google.dev/gemini-api/docs/openai"
  },
  {
    id: "cerebras",
    label: "Cerebras Inference",
    secret: "CEREBRAS_API_KEY",
    baseUrl: "https://api.cerebras.ai/v1",
    models: {
      auto: "gpt-oss-120b",
      fast: "gpt-oss-120b",
      reasoning: "gpt-oss-120b",
      coding: "gpt-oss-120b"
    },
    docs: "https://inference-docs.cerebras.ai/resources/openai"
  },
  {
    id: "mistral",
    label: "Mistral AI",
    secret: "MISTRAL_API_KEY",
    baseUrl: "https://api.mistral.ai/v1",
    models: {
      auto: "mistral-small-latest",
      fast: "mistral-small-latest",
      reasoning: "mistral-small-latest",
      coding: "codestral-latest"
    },
    docs: "https://docs.mistral.ai/resources/migration-guides"
  },
  {
    id: "nvidia",
    label: "NVIDIA NIM",
    secret: "NVIDIA_API_KEY",
    baseUrl: "https://integrate.api.nvidia.com/v1",
    models: {
      auto: "meta/llama-3.1-70b-instruct",
      fast: "meta/llama-3.1-70b-instruct",
      reasoning: "deepseek-ai/deepseek-r1",
      coding: "meta/llama-3.1-70b-instruct"
    },
    docs: "https://build.nvidia.com/explore/discover"
  },
  {
    id: "zai",
    label: "Z.AI",
    secret: "ZAI_API_KEY",
    baseUrl: "https://api.z.ai/api/paas/v4",
    models: {
      auto: "glm-4.7-flash",
      fast: "glm-4.7-flash",
      reasoning: "glm-4.7-flash",
      coding: "glm-4.7-flash"
    },
    docs: "https://docs.z.ai/guides/llm/glm-4.7"
  },
  {
    id: "huggingface",
    label: "Hugging Face Inference",
    secret: "HF_TOKEN",
    baseUrl: "https://router.huggingface.co/v1",
    models: {
      auto: null,
      fast: null,
      reasoning: null,
      coding: null
    },
    docs: "https://huggingface.co/docs/inference-providers/en/index"
  }
];

const ALIASES = new Set(["auto", "fast", "reasoning", "coding"]);

function normalizedBaseUrl(value) {
  return String(value).replace(/\/+$/, "");
}

function overrideModels(definition, env) {
  const prefix = definition.id.toUpperCase().replace(/[^A-Z0-9]/g, "_");
  const generic = env[`${prefix}_MODEL`] || (definition.id === "huggingface" ? env.HF_MODEL : "");
  return Object.fromEntries(
    Object.entries(definition.models).map(([alias, defaultModel]) => [
      alias,
      env[`${prefix}_MODEL_${alias.toUpperCase()}`] || generic || defaultModel
    ])
  );
}

export function listProviders(env = {}) {
  return PROVIDER_DEFINITIONS.map((definition) => ({
    ...definition,
    baseUrl: normalizedBaseUrl(env[`${definition.id.toUpperCase()}_BASE_URL`] || definition.baseUrl),
    models: overrideModels(definition, env),
    apiKey: env[definition.secret] || "",
    configured: Boolean(env[definition.secret])
  }));
}

export function parseModelSelector(requestedModel = "free/auto") {
  const value = String(requestedModel || "free/auto").trim();

  if (value.includes("::")) {
    const [providerId, ...modelParts] = value.split("::");
    return {
      providerId: providerId.toLowerCase(),
      alias: null,
      explicitModel: modelParts.join("::")
    };
  }

  const alias = value.startsWith("free/") ? value.slice(5) : value;
  if (ALIASES.has(alias)) {
    return { providerId: null, alias, explicitModel: null };
  }

  return { providerId: null, alias: null, explicitModel: value };
}

export function resolveProviderModel(provider, selector) {
  if (selector.providerId && selector.providerId !== provider.id) return null;
  if (selector.explicitModel) return selector.explicitModel;
  return provider.models[selector.alias || "auto"] || null;
}

export function providerHeaders(provider, env = {}) {
  const headers = {
    Authorization: `Bearer ${provider.apiKey}`,
    "Content-Type": "application/json",
    Accept: "application/json, text/event-stream"
  };

  if (provider.id === "openrouter") {
    headers["HTTP-Referer"] = env.APP_URL || "https://github.com/Base27-CVNSS";
    headers["X-Title"] = env.APP_NAME || "Base27 Free LLM Router";
  }

  return headers;
}

export function normalizePayloadForProvider(payload, provider, model) {
  const body = { ...payload, model };

  // Groq documents these OpenAI fields as unsupported. Removing them permits
  // legitimate failover without turning a provider-specific incompatibility
  // into a permanent gateway failure.
  if (provider.id === "groq") {
    delete body.logprobs;
    delete body.logit_bias;
    delete body.top_logprobs;
    if (body.n !== undefined) body.n = 1;
  }

  // Provider support differs. Keep the OpenAI-compatible core and only send
  // reasoning_effort to providers that document or route that capability.
  if (!["openrouter", "gemini"].includes(provider.id)) {
    delete body.reasoning_effort;
  }

  return body;
}

export const VIRTUAL_MODELS = [
  { id: "free/auto", label: "Auto Free", purpose: "balanced" },
  { id: "free/fast", label: "Fast", purpose: "latency" },
  { id: "free/reasoning", label: "Reasoning", purpose: "reasoning" },
  { id: "free/coding", label: "Coding", purpose: "code" }
];
