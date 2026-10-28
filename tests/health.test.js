import test from "node:test";
import assert from "node:assert/strict";
import handler from "../api/health.js";

test("health API returns status 200 and expected message", () => {
  const res = {
    statusCode: null,
    body: null,

    status(code) {
      this.statusCode = code;
      return this;
    },

    json(data) {
      this.body = data;
      return this;
    },
  };

  handler({}, res);

  assert.equal(res.statusCode, 200);

  assert.deepEqual(res.body, {
    message: "Backend API is working!",
  });
});