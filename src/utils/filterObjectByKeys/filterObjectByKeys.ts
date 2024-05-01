// This function filters an object based on a provided list of keys.
// It iterates through the object's keys and checks if they exist in the keys array.
// If a key is present, it adds the corresponding key-value pair to the filteredObject.
// The returned object is a partial type of the original object, ensuring type safety.

export const filterObjectByKeys = <T extends object>(
  obj: T,
  keys: string[]
): Partial<T> => {
  const filteredObject: Partial<T> = {};

  Object.keys(obj).forEach((key) => {
    if (keys.includes(key)) {
      filteredObject[key as keyof T] = obj[key as keyof T];
    }
  });
  return filteredObject;
};

// const user: { name: string; age: number; email: string } = {
//   name: 'John Doe',
//   age: 30,
//   email: 'john.doe@example.com',
// };

// const nameAndEmail = filterObjectByKeys(user, ['name', 'email']);
// console.log(nameAndEmail); // { name: 'John Doe', email: 'john.doe@example.com' }
