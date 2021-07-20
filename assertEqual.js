// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertEqual;

// TEST CODE
if (process.argv[2] === "testAssertEqual") {
  assertEqual("Lighthouse Labs", "Bootcamp");
  assertEqual(1, 1);
  assertEqual("foo123", "foo123");
  assertEqual(42, 69);
}
