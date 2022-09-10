/**
 * Compute the sum of given values.
 *
 * @example
 *
 * Basic usage :
 * ```ts
 * sum(); // 0
 * sum(1, 2); // 3
 * sum(1, 2, 3); // 6
 * ```
 * Using array :
 * ```ts
 * const inputs = [1, 2, 3];
 * sum(inputs); // 6
 * ```
 *
 * @param values Values to sum
 * @returns Sum
 */
export declare function sum(...values: (number | number[])[]): number;
