const assertArraysEqual = require("../assertArraysEqual");

assertArraysEqual([1, 2, 3], [1, 2, 3]); // PASS
assertArraysEqual([1, 2, 3], [3, 2, 1]); // FAIL
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // PASS
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // FAIL
