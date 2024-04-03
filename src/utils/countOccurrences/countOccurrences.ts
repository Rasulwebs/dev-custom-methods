// Counts the number of occurrences of the given value in the given array.

const countOccurrences = <T>(array: T[], value: T): number => {
  return array.reduce(
    (count, current) => (current === value ? count + 1 : count),
    0
  );
};

export default countOccurrences;
