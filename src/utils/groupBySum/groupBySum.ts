// This function groups an array of objects and
// calculates the sum for a specific property within each group.
// It takes an array (arr) and a

/**
 * Groups an array of objects by a specified property and calculates the sum for each group.
 *
 * @param {T[]} arr - The array of objects to be grouped.
 * @param {(item: T) => string | number} keySelector - A function that returns the property to group by.
 * @return {Record<string | number, number>} - An object where the keys are the unique values of the specified property and the values are the sums of the objects in each group.
 */

export const groupBySum = <T>(
  arr: T[],
  keySelector: (item: T) => string | number
): Record<string | number, number> => {
  return arr.reduce((acc, item) => {
    const key = keySelector(item);

    acc[key] = (acc[key] || 0) + 1; // Initialize with 0 if key doesn't exist

    return acc;
  }, {} as Record<string | number, number>);
};
