// Generates a random color:

const getRandomColor = (): string => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
};

export default getRandomColor;
