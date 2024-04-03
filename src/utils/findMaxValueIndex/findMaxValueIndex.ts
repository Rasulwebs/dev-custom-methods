// Determines the maximum value of the given array and returns its index.

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
