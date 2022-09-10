/**
 * Compute average based on pushed values.
 * If the amount of values exceed the length, the first pushed values are dropped.
 *
 * @example
 *
 * Value by value:
 * ```
 * const average = new MobileAverage(3);
 * average.value; // 0
 * average.add(1);
 * average.value; // 1
 * average.add(2);
 * average.value; // 1.5
 * average.add(3);
 * average.value; // 2
 * average.add(4);
 * average.value; // 3
 * ```
 *
 * Pushing multiple values:
 * ```
 * const average = new MobileAverage(3);
 * average.add(1, 2, 3);
 * average.value; // 2
 * average.add(3, 4, 5, 6, 7);
 * average.value; // 6
 * ```
 */
export class MobileAverage {
  /**
   * Sum of the current values
   */
  private sum: number = 0;

  /**
   * FIFO used to store values used to compute average
   */
  private values: number[] = [];

  /**
   * Amount of values kept to compute the average
   */
  private readonly length: number;

  /**
   * Constructor
   * @param length Amount of values kept to compute the average
   */
  constructor(length: number) {
    this.length = length;
  }

  /**
   * Add a value to the average computation.
   * @param value Value to add
   */
  public add(...values: number[]) {
    this.values.push(...values);
    for (const value of values) {
      this.sum += value;
    }

    while (this.values.length > this.length) {
      const pop = this.values.shift() as number;
      this.sum -= pop;
    }
  }

  /**
   * Current average
   */
  public get value(): number {
    return this.sum / Math.max(1, this.values.length);
  }
}
