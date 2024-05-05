// Removes duplicate elements in an array:

/**
 * Removes duplicate elements in an array.
 *
 * @param {T[]} array - The array from which to remove duplicates.
 * @return {T[]} The array with duplicate elements removed.
 */

const removeDuplicates = <T>(array: T[]): T[] => {
  return array.filter((item, index) => array.indexOf(item) === index);
};

export default removeDuplicates;
