const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require("./assertEqual");

const letterPositions = string => {
  const results = {};
  console.log(string, typeof string);

  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (char !== " ") {
      results[char] = [...(results[char] || []), i];
    }
  }
  
  return results;
};

// Tests
if (process.argv[2] === "testLetterPositions") {
  const input1 = "lighthouse in the house";
  const output1 = {
    l: [0],
    i: [1, 11],
    g: [2],
    h: [3, 5, 15, 18],
    t: [4, 14],
    o: [6, 19],
    u: [7, 20],
    s: [8, 21],
    e: [9, 16, 22],
    n: [12]
  };
  assertArraysEqual(output1.h, letterPositions(input1).h);
  assertArraysEqual(output1.n, letterPositions(input1).n);
  assertEqual(letterPositions(input1).a, undefined);
  assertArraysEqual(Object.getOwnPropertyNames(letterPositions("")), []);
}
