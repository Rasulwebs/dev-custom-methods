// Determines the maximum value of the given array and returns its index.

/**
 * Finds the index of the maximum value in the given array of numbers.
 *
 * @param {number[]} array - The array of numbers to search.
 * @returns {number | undefined} The index of the maximum value in the array, or undefined if the array is empty.
 */

const findMaxValueIndex = (array: number[]): number | undefined => {
  if (array.length === 0) return undefined;
  let maxIndex = 0;
  for (let i = 1; i < array.length; i++) {
    if (array[i] > array[maxIndex]) {
      maxIndex = i;
    }
  }
  return maxIndex;
};

export default findMaxValueIndex;
