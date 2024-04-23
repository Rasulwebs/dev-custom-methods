// It takes an array of objects (data), a key property (key) representing the
//   name - like property(assumed to be a string), and an optional descending flag(defaults to ascending order).
// It returns a new array containing the sorted objects.
// It uses the sort method with a custom comparison function:
// Both names are converted to lowercase for case-insensitive comparison.
// localeCompare is used for proper alphabetic sorting (considering language-specific rules).
// The comparison logic is reversed for descending order using the descending flag.


/**
 * Sorts an array of objects by the specified key in ascending or descending order.
 *
 * @param {T[]} data - The array of objects to be sorted.
 * @param {keyof T & string} key - The key in the objects to sort by.
 * @param {boolean} [descending=false] - Flag to indicate whether to sort in descending order.
 * @returns {T[]} The sorted array of objects.
 */

export const sortByName = <T>(
  data: T[],
  key: keyof T & string,
  descending = false
): T[] => {
  return data.sort((a, b) => {
    const nameA = (a[key] as string).toLowerCase();
    const nameB = (b[key] as string).toLowerCase();
    return descending ? nameB.localeCompare(nameA) : nameA.localeCompare(nameB);
  });
};
