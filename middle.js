const assertArraysEqual = require('./assertArraysEqual');

const middle = array => {
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 === 0) {
    return array.slice(array.length / 2 - 1, array.length / 2 + 1);
  } else {
    return Array.of(array[Math.floor(array.length / 2)]);
  }
};

// Tests
if (process.argv[2] === "testMiddle") {
  assertArraysEqual(middle([1]), []);
  assertArraysEqual(middle([1, 2]), []);
  assertArraysEqual(middle([1, 2, 3]), [2]);
  assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
}
