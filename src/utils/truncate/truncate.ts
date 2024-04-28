// Trim text to specified length:

// Truncates a string to a specified maximum length by adding "..." if necessary.
//
// @param {string} str - The input string to truncate.
// @param {number} maxLength - The maximum length the string should be truncated to.
// @returns {string} The truncated string.
//

const truncate = (str: string, maxLength: number): string => {
  return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
};

export default truncate;
