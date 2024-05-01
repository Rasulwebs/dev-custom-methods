// is used to select one element from an array in random order

/**
 * Selects one element from an array in random order.
 *
 * @param {T[]} array - The array from which to select a random element.
 * @return {T | undefined} The randomly selected element from the array, or undefined if the array is empty.
 */

const getRandomElement = <T>(array: T[]): T | undefined => {
  if (array.length === 0) return undefined;
  const randomIndex = Math.floor(Math.random() * array.length);

  return array[randomIndex];
};

export default getRandomElement;
