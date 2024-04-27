// Sort an array by a specified key:

/**
 * Sorts an array of objects by a specified key in ascending order.
 *
 * @param {T[]} array - The array of objects to be sorted.
 * @param {keyof T} key - The key in the objects to sort by.
 * @return {T[]} The sorted array of objects.
 */

const sortByKey = <T>(array: T[], key: keyof T): T[] => {
  return array.slice().sort((a, b) => (a[key] > b[key] ? 1 : -1));
};

export default sortByKey;
