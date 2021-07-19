const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = (array) => {
  return array.slice(1,array.length);
};

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
const wordsTail = tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
assertEqual(wordsTail[0], words[1]);
assertEqual(wordsTail[1], words[2]);

const singleElem = ["single"];
assertEqual(tail(singleElem).length, 0);

const emptyArray = [];
assertEqual(tail(emptyArray).length, 0);