// This function groups an array of objects and 
// calculates the sum for a specific property within each group.
// It takes an array (arr) and a

export const groupBySum = <T>(
  arr: T[],
  keySelector: (item: T) => string | number,
): Record<string | number, number> => {
  return arr.reduce((acc, item) => {
    const key = keySelector(item);
    acc[key] = (acc[key] || 0) + 1; // Initialize with 0 if key doesn't exist
    return acc;
  }, {} as Record<string | number, number>);
};
