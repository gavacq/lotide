const assertEqual = require("./assertEqual");
const eqArrays = require("./eqArrays");

const isObj = obj => (typeof obj !== "object" || obj === null) ? false : true;

const eqObjects = (obj1, obj2) => {
  if (!isObj(obj1) || !isObj(obj2) ||
      Object.keys(obj1).length !== Object.keys(obj2).length) return false;

  for (const key in obj1) {
    if (Array.isArray(obj1[key])) {
      if (!eqArrays(obj1[key], obj2[key])) return false;
    } else if (isObj(obj1[key])) {
      if (!eqObjects(obj1[key], obj2[key])) return false;
    } else {
      if (obj1[key] !== obj2[key]) return false;
    }
  }

  return true;
};

module.exports = eqObjects;

// Tests
if (process.argv[2] === "testEqObjects") {
  const ab = { a: "1", b: "2" };
  const ba = { b: "2", a: "1" };
  assertEqual(eqObjects(ab, ba), true); // => true

  const abc = { a: "1", b: "2", c: "3" };
  assertEqual(eqObjects(ab, abc), false); // => false

  const arrObj1 = {a: [1, 2], b: 3};
  const arrObj2 = {b: 3, a: [1, 2]};
  assertEqual(eqObjects(arrObj1, arrObj2), true);

  const objObj1 = {a: {"foo": 1, "bar": "baz"}, b: 3};
  const objObj2 = {b: 3, a: {"foo": 1, "bar": "baz"}};
  assertEqual(eqObjects(objObj1, objObj2), true);

  const nestObj1 = {a: {"foo": 1, "bar": {"bop": [1, 2]}}, b: 3};
  const nestObj2 = {b: 3, a: {"foo": 1, "bar": {"bop": [1, 2]}}};
  const nestObj3 = {b: 3, a: {"foo": 1, "bar": {"bop": [1, 2, [1]]}}};
  assertEqual(eqObjects(nestObj1, nestObj2), true);
  assertEqual(eqObjects(nestObj1, nestObj3), false);
}
