/**
 * Deep merges two objects recursively.
 *
 * @param {T} target - The target object to merge into.
 * @param {T} source - The source object to merge from.
 * @returns {T} The merged object.
 */

export const deepMerge = <T extends object>(target: T, source: T): T => {
  /**
   * Checks if the given value is an object.
   *
   * @param {any} obj - The value to check.
   * @returns {obj is object} True if the value is an object, false otherwise.
   */

  function isObject(obj: any): obj is object {
    return obj !== null && typeof obj === "object";
  }

  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach((key) => {
      const targetValue = target[key as keyof T];
      const sourceValue = source[key as keyof T];

      if (isObject(targetValue) && isObject(sourceValue)) {
        target[key as keyof T] = deepMerge(targetValue, sourceValue);
      } else {
        target[key as keyof T] = sourceValue;
      }
    });
  } else {
    // Handle non-object values (can be customized)
    target = source;
  }
  return target;
};
