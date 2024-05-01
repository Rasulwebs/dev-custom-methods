/**
 * Creates a FormData object from the given data object.
 *
 * @param data - The data object to convert to FormData.
 * @returns A FormData object containing the data.
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createFormData = <T extends Record<string, any>>(
  data: T
): FormData => {
  const formData = new FormData();
  for (const key of Object.keys(data)) {
    formData.append(key, String(data[key])); // Type assertion for string values
  }
  return formData;
};
