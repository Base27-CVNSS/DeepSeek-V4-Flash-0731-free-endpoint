import assert from "node:assert/strict";
import test from "node:test";

import { resetRouterState, routeChatCompletion } from "../src/router.js";

const payload = {
  model: "free/auto",
  messages: [{ role: "user", content: "hello" }]
};

test.beforeEach(() => resetRouterState());

test("fails over sequentially after a retryable 429", async () => {
  const calls = [];
  const fetchImpl = async (url, init) => {
    calls.push({ url, body: JSON.parse(init.body) });
    if (calls.length === 1) {
      return new Response(JSON.stringify({ error: { message: "rate limited" } }), {
        status: 429,
        headers: { "Content-Type": "application/json", "Retry-After": "2" }
      });
    }
    return new Response(JSON.stringify({ choices: [{ message: { role: "assistant", content: "ok" } }] }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  };

  const result = await routeChatCompletion(
    payload,
    { OPENROUTER_API_KEY: "or", GROQ_API_KEY: "g", MAX_PROVIDER_ATTEMPTS: "2" },
    { fetchImpl, now: 1_000 }
  );

  assert.ok(result.response);
  assert.equal(result.provider.id, "groq");
  assert.equal(result.attempts.length, 2);
  assert.match(calls[0].url, /openrouter\.ai/);
  assert.match(calls[1].url, /groq\.com/);
});

test("does not retry a non-retryable client error", async () => {
  let calls = 0;
  const result = await routeChatCompletion(
    payload,
    { OPENROUTER_API_KEY: "or", GROQ_API_KEY: "g" },
    {
      now: 2_000,
      fetchImpl: async () => {
        calls += 1;
        return new Response(JSON.stringify({ error: { message: "bad request" } }), {
          status: 400,
          headers: { "Content-Type": "application/json" }
        });
      }
    }
  );

  assert.equal(calls, 1);
  assert.equal(result.error.status, 400);
  assert.equal(result.error.code, "upstream_rejected_request");
});

test("returns a clear configuration error when no key exists", async () => {
  const result = await routeChatCompletion(payload, {}, { fetchImpl: async () => { throw new Error("must not run"); } });
  assert.equal(result.error.status, 503);
  assert.equal(result.error.code, "no_provider_configured");
});

test("supports an explicit provider and model selector", async () => {
  let calledUrl = "";
  let calledBody;
  const result = await routeChatCompletion(
    { ...payload, model: "gemini::gemini-3.6-flash" },
    { OPENROUTER_API_KEY: "or", GEMINI_API_KEY: "gm" },
    {
      fetchImpl: async (url, init) => {
        calledUrl = url;
        calledBody = JSON.parse(init.body);
        return new Response(JSON.stringify({ choices: [{ message: { content: "ok" } }] }), { status: 200 });
      }
    }
  );

  assert.equal(result.provider.id, "gemini");
  assert.match(calledUrl, /googleapis\.com/);
  assert.equal(calledBody.model, "gemini-3.6-flash");
});
