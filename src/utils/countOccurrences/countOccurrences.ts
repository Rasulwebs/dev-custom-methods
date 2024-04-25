/**
 * Counts the number of occurrences of the given value in the given array.
 *
 * @param {T[]} array - The array to search for occurrences.
 * @param {T} value - The value to count occurrences of.
 * @returns {number} The number of occurrences of the given value in the array.
 */

const countOccurrences = <T>(array: T[], value: T): number => {
  return array.reduce(
    (count, current) => (current === value ? count + 1 : count),
    0
  );
};

export default countOccurrences;
