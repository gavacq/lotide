const assertEqual = require("./assertEqual");
const eqArrays = require("./eqArrays");

const findKey = (obj, callback) => {
  // const keyName = "";

  for (const key of Object.keys(obj)) {
    if (callback(obj[key])) return key;
  }

  return undefined;
};

// Tests
if (process.argv[2] === "testFindKey") {
  const key1 = findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  }, x => x.stars === 2); // => "noma"
  assertEqual(key1, "noma");
  assertEqual(findKey({}, x => x === "key"), undefined);
  assertEqual(findKey({
    "a": [1, 2, 3],
    "b": [1, 2, 3, 4]
  }, x => eqArrays(x, [1, 2, 3, 4])), "b");
}
