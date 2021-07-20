const eqArrays = require('./eqArrays');

const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2) === true) {
    console.log(`✅ Arrays are equal`);
  } else {
    console.log(`❌ Arrays are not equal`);
  }
};

if (process.argv[2] === "testAssertArraysEqual") {
  assertArraysEqual([1, 2, 3], [1, 2, 3]); // PASS
  assertArraysEqual([1, 2, 3], [3, 2, 1]); // FAIL
  assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // PASS
  assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // FAIL
}

module.exports = assertArraysEqual;
