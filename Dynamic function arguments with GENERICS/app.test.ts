import { assertEquals } from "jsr:@std/assert";
import { sendEvent } from "./app.ts";

Deno.test("string key of", () => {
  const data = sendEvent("LOG_IN", {
    userId: 20,
  });
  assertEquals(data, "LOG_IN");
});
