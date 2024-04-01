// Capitalizes the first letter of text:

const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export default capitalize;
