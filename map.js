const assertArraysEqual = require("./assertArraysEqual");

const map = (array, callback) => {
  const results = [];

  for (const elem of array) {
    results.push(callback(elem));
  }

  return results;
};

// Tests
if (process.argv[2] === "testMap") {
  const words1 = ["ground", "control", "to", "major", "tom"];
  const output1 = ["g", "c", "t", "m", "t"];
  const results1 = map(words1, word => word[0]);
  assertArraysEqual(results1, output1);

  assertArraysEqual(map([], x => x++), []);
  const arrObjs = [{
    foo: "bar",
    bar: "foo"
  }, {
    a: 1,
    b: 2
  }];
  assertArraysEqual(map(arrObjs, Object.keys), [["foo", "bar"], ["a", "b"]]);
}

module.exports = map;
