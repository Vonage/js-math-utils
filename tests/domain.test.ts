import { describe, expect, it } from "vitest";
import { clip, map } from "../src/domain";

describe("clip", () => {
  it("should clip number", async () => {
    expect(clip(10, 5, 15)).toBe(10);
    expect(clip(2, 5, 15)).toBe(5);
    expect(clip(30, 5, 15)).toBe(15);
  });
});

describe("map", () => {
  it("should convert value between domain", async () => {
    expect(map(0.5, 0, 1, 0, 10)).toBe(5);
    expect(map(0.5, -1, 1, 0, 100)).toBe(75);
  });
});
