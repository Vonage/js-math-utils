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
export declare class MobileAverage {
    /**
     * Sum of the current values
     */
    private sum;
    /**
     * FIFO used to store values used to compute average
     */
    private values;
    /**
     * Amount of values kept to compute the average
     */
    private readonly length;
    /**
     * Constructor
     * @param length Amount of values kept to compute the average
     */
    constructor(length: number);
    /**
     * Add a value to the average computation.
     * @param value Value to add
     */
    add(...values: number[]): void;
    /**
     * Current average
     */
    get value(): number;
}
