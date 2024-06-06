import { describe, it, expect } from "vitest";

describe("First test", async () => {
    it("Should return true if 2 is greater than 1", async () => {
      const result = 2 > 1;

      expect(result).toBeTruthy();
    });
});
