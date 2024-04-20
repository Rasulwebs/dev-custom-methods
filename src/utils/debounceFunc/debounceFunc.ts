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
