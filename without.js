const assertArraysEqual = require('./assertArraysEqual');

const without = (array, excluded) => {
  return array.filter(element => excluded.includes(element) === false);
};

// Tests
if (process.argv[2] === "testWithout") {
  assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
  assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  assertArraysEqual(without([], [1, 3]), []);
  assertArraysEqual(without([1, 2], []), [1, 2]);
  const words = ["hello", "world", "lighthouse"];
  without(words, ["lighthouse"]); // no need to capture return value for this test case
  // Make sure the original array was not altered by the without function
  assertArraysEqual(words, ["hello", "world", "lighthouse"]);
}

module.exports = without;
