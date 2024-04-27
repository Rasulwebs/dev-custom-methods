// Creates a slug for the URL of the text:

/**
 * Creates a slug for the URL of the text.
 *
 * @param {string} str - The text to create a slug from.
 * @return {string} The generated slug for the URL.
 */

const slugify = (str: string): string => {
  return str
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "");
};

export default slugify;
