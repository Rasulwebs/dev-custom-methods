
// Creates a slug for the URL of the text:

const slugify = (str: string): string => {
  return str
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "");
};

export default slugify;
