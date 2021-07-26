const assertEqual = require("./assertEqual");

const findKeyByValue = (obj, value) => {
  for (const key in obj) {
    if (obj[key] === value) return key;
  }

  return undefined;
};

// Tests
if (process.argv[2] === "testFindKeyByValue") {
  const bestTVShowsByGenre = {
    sciFi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire",
    wiring:  "The Wire",
    number: 1,
    undef: undefined,
    array: [1, "foo"]
  };

  assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  assertEqual(findKeyByValue(bestTVShowsByGenre, 1), "number");
  assertEqual(findKeyByValue(bestTVShowsByGenre, undefined), "undef");
  assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "wiring"); // Fail because should return first key with given value
  assertEqual(findKeyByValue({}, "foo"), undefined);
  assertEqual(findKeyByValue(bestTVShowsByGenre, [1, "foo"]), "array"); // Fail because does not work with array values
}

module.exports = findKeyByValue;
