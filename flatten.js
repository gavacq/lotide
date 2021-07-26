const assertArraysEqual = require('./assertArraysEqual');

const flatten = array => {
  let flattenedArray = [];
  
  array.forEach(elem => {
    if (Array.isArray(elem)) {
      flattenedArray = flattenedArray.concat(flatten(elem));
    } else {
      flattenedArray.push(elem);
    }
  });
  
  return flattenedArray;
};

// Tests
if (process.argv[2] === "testFlatten") {
  assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  assertArraysEqual(flatten([1, [2, [3, [4, [5, 6]]], 7]]), [1, 2, 3, 4, 5, 6, 7]); // Deeply nested arrays
  assertArraysEqual(flatten([1, 2, [], 3]), [1, 2, 3]);
  assertArraysEqual(flatten([1, 2, [1, [3, [], [5, "foo"]], 3]]), [1, 2, 1, 3, 5, "foo", 3]);
}

module.exports = flatten;
