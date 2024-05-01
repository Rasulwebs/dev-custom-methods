// This function flattens a nested array into a single-dimensional array.
// It takes an array of arrays (arr) and returns a flattened array.
// It utilizes the reduce method to iterate through the nested array.
// Within the reducer function, it uses the concat method to combine the current accumulator (acc) with the current sub-array (val).
// The final result is a single-level array containing all the elements from the original nested structure.

export const flatten = <T>(arr: T[][]): T[] => {
  return arr.reduce((accumulator: T[], currentValue: T[]): T[] => {
    return accumulator.concat(currentValue);
  }, []);
};

// const nestedArray = [
//   [1, 2, 3],
//   [4, 5],
//   [6],
// ];

// const flattenedArray = flatten(nestedArray);

// console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]
