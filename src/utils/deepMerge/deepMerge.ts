export const deepMerge = <T extends object>(target: T, source: T): T => {
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
