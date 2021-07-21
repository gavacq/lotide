const assertEqual = require('./assertEqual');

const eqArrays = (arr1, arr2) => {
  if (!Array.isArray(arr1) || !Array.isArray(arr2) || arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (Array.isArray(arr1[i])) return eqArrays(arr1[i], arr2[i]);
    else if (arr1[i] !== arr2[i]) {
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
  assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3", 4]), false);
  assertEqual(eqArrays([1, [2, [3, 5]]], [1, [2, [3, 5]]]), true);
  assertEqual(eqArrays([1, [2, [3, 5]]], [1, [2, [3, "5"]]]), false);
}

module.exports = eqArrays;
