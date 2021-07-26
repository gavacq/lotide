const assertArraysEqual = require("./assertArraysEqual");

const takeUntil = (array, callback) => {
  const result = [];

  for (const elem of array) {
    if (callback(elem)) {
      return result;
    } else {
      result.push(elem);
    }
  }
  
  return result;
};

// Tests
if (process.argv[2] === "testTakeUntil") {
  const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
  const results1 = takeUntil(data1, x => x < 0);
  const output1 = [1, 2, 5, 7, 2];
  assertArraysEqual(results1, output1);

  const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
  const results2 = takeUntil(data2, x => x === ',');
  const output2 = ["I've", "been", "to", "Hollywood"];
  assertArraysEqual(results2, output2);
}

module.exports = takeUntil;
