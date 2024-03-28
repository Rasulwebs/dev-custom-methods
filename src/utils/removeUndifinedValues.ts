
// Getting rid of undefined values in an object

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
