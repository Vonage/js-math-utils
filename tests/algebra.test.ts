import { describe, expect, it } from "vitest";
import { sum } from "../src/algebra";

describe("sum", () => {
  it("should sum values", async () => {
    expect(sum()).toBe(0);
    expect(sum(1)).toBe(1);
    expect(sum(1, 2)).toBe(3);
    expect(sum(1, 2, 3)).toBe(6);
  });

  it("should sum array", async () => {
    expect(sum([1, 2, 3])).toBe(6);
  });
});
