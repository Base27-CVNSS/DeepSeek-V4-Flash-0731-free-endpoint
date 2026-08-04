import assert from "node:assert/strict";
import test from "node:test";

import {
  listProviders,
  normalizePayloadForProvider,
  parseModelSelector,
  resolveProviderModel
} from "../src/providers.js";

test("virtual model aliases resolve to provider-specific models", () => {
  const [openrouter, groq] = listProviders({ OPENROUTER_API_KEY: "a", GROQ_API_KEY: "b" });
  const selector = parseModelSelector("free/fast");

  assert.equal(resolveProviderModel(openrouter, selector), "openrouter/free");
  assert.equal(resolveProviderModel(groq, selector), "llama-3.1-8b-instant");
});

test("provider::model targets exactly one provider", () => {
  const providers = listProviders({ GROQ_API_KEY: "key", GEMINI_API_KEY: "key" });
  const selector = parseModelSelector("groq::openai/gpt-oss-120b");

  assert.equal(resolveProviderModel(providers.find((item) => item.id === "groq"), selector), "openai/gpt-oss-120b");
  assert.equal(resolveProviderModel(providers.find((item) => item.id === "gemini"), selector), null);
});

test("Groq payload normalization removes documented unsupported fields", () => {
  const groq = listProviders({ GROQ_API_KEY: "key" }).find((item) => item.id === "groq");
  const result = normalizePayloadForProvider(
    { messages: [{ role: "user", content: "hi" }], logprobs: true, logit_bias: { 1: 1 }, top_logprobs: 3, n: 2, reasoning_effort: "high" },
    groq,
    "llama-3.1-8b-instant"
  );

  assert.equal(result.model, "llama-3.1-8b-instant");
  assert.equal(result.n, 1);
  assert.equal("logprobs" in result, false);
  assert.equal("logit_bias" in result, false);
  assert.equal("top_logprobs" in result, false);
  assert.equal("reasoning_effort" in result, false);
});

test("environment variables can override provider models", () => {
  const gemini = listProviders({ GEMINI_API_KEY: "key", GEMINI_MODEL_FAST: "gemini-custom-fast" })
    .find((item) => item.id === "gemini");
  assert.equal(gemini.models.fast, "gemini-custom-fast");
});
