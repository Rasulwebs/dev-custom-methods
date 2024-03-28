
// Return trimmed string type values in the object

export function trimValues<T extends Record<string, any>>(obj: T): T {
  const trimmedObject: Partial<T> = {};

  Object.keys(obj)?.forEach((key) => {
    const value = obj[key as keyof T];

    if (typeof value === "string") {
      trimmedObject[key as keyof T] = value.trim() as T[keyof T];
    } else {
      trimmedObject[key as keyof T] = value as T[keyof T];
    }
  });

  return trimmedObject as T;
}
