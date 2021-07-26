const inspect = require("util").inspect;
const eqArrays = require('./eqArrays');

const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2) === true) {
    console.log(`✅ PASS: ${inspect(arr1)} === ${inspect(arr2)}`);
  } else {
    console.log(`❌ FAIL: ${inspect(arr1)} !== ${inspect(arr2)}`);
  }
};

module.exports = assertArraysEqual;
