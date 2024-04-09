// This function performs a deep search within an object to find a value that matches a specific predicate function.
// IOtherwise, the function iterates over all values within the current object and adds them to the queue for further exploration.
// t uses a queue to traverse the object structure level by level.
// The predicate function takes a value and returns true if it matches the desired criteria.
// If a value satisfies the predicate, it's returned immediately.

export const findDeep = <T>(
  obj: object,
  predicate: (value: any) => boolean
): T | undefined => {
  const queue: any[] = [obj];

  while (queue.length) {
    const currentObj = queue.shift();

    if (predicate(currentObj)) {
      return currentObj as T;
    }

    if (typeof currentObj === "object" && currentObj !== null) {
      Object.values(currentObj).forEach((value) => queue.push(value));
    }
  }

  return undefined;
};

