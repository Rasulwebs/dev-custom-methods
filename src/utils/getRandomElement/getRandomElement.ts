// is used to select one element from an array in random order

const getRandomElement = <T>(array: T[]): T | undefined => {
  if (array.length === 0) return undefined;
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

export default getRandomElement;
