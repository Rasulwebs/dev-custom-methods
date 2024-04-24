// Capitalizes the first letter of text:

/**
 * Capitalizes the first letter of a given string.
 * 
 * @param {string} str - The string to capitalize.
 * @returns {string} The capitalized string.
 */

const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export default capitalize;
