// This function creates a Promise that resolves after a specified number of milliseconds.
// It utilizes the setTimeout function inside a Promise constructor.
// This enables asynchronous waiting for a specific delay within your code.

export const sleep = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
