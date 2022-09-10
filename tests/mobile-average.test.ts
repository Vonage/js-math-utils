import { describe, expect, it } from "vitest";
import { MobileAverage } from "../src/mobile-average";

describe("MobileAverage", () => {
  it("should provide default value", async () => {
    const average = new MobileAverage(1);
    expect(average.value).toBe(0);
  });

  it("should add value by value", async () => {
    const average = new MobileAverage(3);
    average.add(1);
    expect(average.value).toBe(1);
    average.add(2);
    expect(average.value).toBe(1.5);
    average.add(3);
    expect(average.value).toBe(2);
    average.add(4);
    expect(average.value).toBe(3);
  });

  it("should multiple values", async () => {
    const average = new MobileAverage(3);
    average.add(1, 2, 3);
    expect(average.value).toBe(2);
    average.add(3, 4, 5, 6, 7);
    expect(average.value).toBe(6);
  });
});
