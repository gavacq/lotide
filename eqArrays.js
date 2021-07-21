const assertEqual = require('./assertEqual');

const eqArrays = (arr1, arr2) => {
  if (!arr1 || !arr2) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};

// Tests
if (process.argv[2] === "testEqArrays") {
  assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
  assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
  assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
}

module.exports = eqArrays;
