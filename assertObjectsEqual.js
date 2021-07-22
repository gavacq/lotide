const eqObjects = require("./eqObjects");
const inspect = require("util").inspect;

const assertObjectsEqual = (obj1, obj2) => {
  if (eqObjects(obj1, obj2) === true) {
    console.log(`✅ PASS: ${inspect(obj1)} === ${inspect(obj2)}`);
  } else {
    console.log(`❌ FAIL: ${inspect(obj1)} !== ${inspect(obj2)}`);
  }
};

// Tests
if (process.argv[2] === "testAssertObjectsEqual") {
  const ab = { a: "1", b: "2" };
  const ba = { b: "2", a: "1" };
  assertObjectsEqual(ab, ba); // => true

  const abc = { a: "1", b: "2", c: "3" };
  assertObjectsEqual(ab, abc); // => false
}

module.exports = assertObjectsEqual;
