// Partitioning an array:

/**
 * Partitions an array into smaller arrays of a specified size.
 *
 * @param {T[]} array - The array to partition.
 * @param {number} size - The size of each partition.
 * @returns {T[][]} An array containing smaller arrays, each of the specified size (except the last one, which may be smaller).
 */

const chunkArray = <T>(array: T[], size: number): T[][] => {
  return Array.from({ length: Math.ceil(array.length / size) }, (_, index) =>
    array.slice(index * size, index * size + size)
  );
};

export default chunkArray;
