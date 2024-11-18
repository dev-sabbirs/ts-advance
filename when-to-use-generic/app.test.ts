import { assertEquals } from "jsr:@std/assert";
import { getDisplayName } from "./app.ts";

Deno.test("when-to-use-generic", () => {
  const name = getDisplayName({
    firstName: "Sabbir",
    lastName: "Hossain",
  });
  assertEquals(name, {
    humanFirstName: "Sabbir",
    humanLastName: "Hossain",
  });
});
