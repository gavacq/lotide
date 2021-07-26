const middle = array => {
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 === 0) {
    return array.slice(array.length / 2 - 1, array.length / 2 + 1);
  } else {
    return Array.of(array[Math.floor(array.length / 2)]);
  }
};

module.exports = middle;
