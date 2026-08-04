import assert from "node:assert/strict";
import test from "node:test";

import { consumeRateLimit, validateChatPayload } from "../src/index.js";

test("validates the Chat Completions message shape", () => {
  assert.equal(validateChatPayload({ messages: [{ role: "user", content: "hello" }] }), null);
  assert.match(validateChatPayload({ messages: [] }), /non-empty/);
  assert.match(validateChatPayload({ messages: [{ content: "missing role" }] }), /role/);
});

test("gateway rate limiter returns Retry-After data", () => {
  const request = new Request("https://router.example/v1/chat/completions", {
    headers: { "CF-Connecting-IP": "203.0.113.10" }
  });
  const env = { PUBLIC_RPM: "1", PUBLIC_BURST: "1" };

  assert.equal(consumeRateLimit(request, env, 1_000).allowed, true);
  const denied = consumeRateLimit(request, env, 1_000);
  assert.equal(denied.allowed, false);
  assert.ok(denied.retryAfter >= 1);
});
