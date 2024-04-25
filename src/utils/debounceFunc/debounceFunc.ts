/**
 * Creates a debounced version of the given function.
 *
 * @param {T} func - The function to debounce.
 * @param {number} delay - The delay in milliseconds before the function is executed.
 * @returns {(...args: any[]) => any} A debounced function.
 */

/* eslint-disable @typescript-eslint/no-explicit-any */
export const debounceFunction = <T extends (...args: any[]) => any>(
  func: T,
  delay: number
): ((...args: any[]) => any) => {
  let timeoutId: any = null;

  return (...args: any[]) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};
