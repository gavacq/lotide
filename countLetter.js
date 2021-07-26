const assertEqual = require('./assertEqual');

const countLetter = string => {
  const letterCounts = {};

  for (const letter of string) {
    letterCounts[letter] = (letterCounts[letter] || 0) + 1;
  }

  return letterCounts;
};

if (process.argv[2] === "testCountLetter") {
  const result1 = countLetter("lighthouse in the house");
  const output1 = {
    l: 1,
    i: 2,
    g: 1,
    h: 4,
    t: 2,
    o: 2,
    u: 2,
    s: 2,
    e: 3,
    n: 1,
  };
  assertEqual(result1.e, output1.e);
  assertEqual(result1.r, undefined);

  const result2 = countLetter("");
  assertEqual(Object.getOwnPropertyNames(result2)[0], undefined);
}

module.exports = countLetter;
