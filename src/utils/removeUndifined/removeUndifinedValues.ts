// Getting rid of undefined values in an object

/**
 * Removes undefined values from an object and returns a new object with only defined values.
 * @param obj The object from which to remove undefined values.
 * @returns A new object with only defined values.
 */

export function removeUndefinedValues<T>(obj: T): Partial<T> {
  const newObj: Partial<T> = {};

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      if (obj[key] !== undefined) {
        newObj[key] = obj[key];
      }
    }
  }

  return newObj;
}
