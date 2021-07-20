const eqArrays = require('./eqArrays');

const assertEqualArrays = (arr1, arr2) => {
  if (eqArrays(arr1, arr2) === true) {
    console.log(`✅ Arrays are equal.`);
  } else {
    console.log(`❌ Arrays are not equal.`);
  }
};

if (process.argv[2] === "testAssertEqualArrays") {
  assertEqualArrays([1, 2, 3], [1, 2, 3]); // PASS
  assertEqualArrays([1, 2, 3], [3, 2, 1]); // FAIL
  assertEqualArrays(["1", "2", "3"], ["1", "2", "3"]); // PASS
  assertEqualArrays(["1", "2", "3"], ["1", "2", 3]); // FAIL
}

module.exports = assertEqualArrays;
