// Sort an array by a specified key:

const sortByKey = <T>(array: T[], key: keyof T): T[] => {
  return array.slice().sort((a, b) => (a[key] > b[key] ? 1 : -1));
};

export default sortByKey;
