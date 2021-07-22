const eqArrays = require('./eqArrays');
const inspect = require("util").inspect;

const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2) === true) {
    console.log(`✅ PASS: ${inspect(arr1)} === ${inspect(arr2)}`);
  } else {
    console.log(`❌ FAIL: ${inspect(arr1)} !== ${inspect(arr2)}`);
  }
};

if (process.argv[2] === "testAssertArraysEqual") {
  assertArraysEqual([1, 2, 3], [1, 2, 3]); // PASS
  assertArraysEqual([1, 2, 3], [3, 2, 1]); // FAIL
  assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // PASS
  assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // FAIL
}

module.exports = assertArraysEqual;
