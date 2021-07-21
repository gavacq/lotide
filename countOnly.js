const assertEqual = require('./assertEqual');

const countOnly = (allItems, itemsToCount) => {
  const itemCounts = {};

  for (let item of allItems) {
    if (item in itemsToCount && itemsToCount[item] === true) {
      itemCounts[item] = (itemCounts[item] || 0) + 1; // If key doesn't exist, initialize it to 1, else increment it by 1
    }
  }

  return itemCounts;
};

if (process.argv[2] === "testCountOnly") {
  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];

  const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

  assertEqual(result1["Jason"], 1);
  assertEqual(result1["Karima"], undefined);
  assertEqual(result1["Fang"], 2);
  assertEqual(result1["Agouhanna"], undefined);
}
