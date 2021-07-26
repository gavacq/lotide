// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ PASS: ${actual} === ${expected}`);
  } else {
    console.log(`❌ FAIL: ${actual} !== ${expected}`);
  }
};

module.exports = assertEqual;
