import { assertEquals } from "jsr:@std/assert";
import type { RemoveLTR } from "./app.ts";
import type { Letters } from "./app.ts";

Deno.test("string key of", () => {
  //   type WithoutA = RemoveL<Letters, "a">;
  //   type WithoutB = RemoveL<Letters, "b">;
  //   type WithoutC = RemoveL<Letters, "c">;
  type RemoveSomething = RemoveLTR<Letters, "a">;

  const data: RemoveSomething = "b";

  assertEquals(data, "b");
});
