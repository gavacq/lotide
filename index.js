const assertArraysEqual = require("./assertArraysEqual");
const assertEqual = require("./assertEqual");
const assertObjectsEqual = require("./assertObjectsEqual");
const countLetter = require("./countLetter");
const countOnly = require("./countOnly");
const eqArrays = require("./eqArrays");
const eqObjects = require("./eqObjects");
const findKey = require("./findKey");
const findKeyByValue = require("./findKeyByValue");
const flatten = require("./flatten");
const joinlist = require("./joinList");
const letterPositions = require("./letterPositions");
const map = require("./map");
const min = require("./min");
const takeUntil = require("./takeUntil");
const without = require("./without");
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');

module.exports = {
  head,
  tail,
  middle,
  assertArraysEqual,
  assertEqual,
  assertObjectsEqual,
  countLetter,
  countOnly,
  eqArrays,
  eqObjects,
  findKey,
  findKeyByValue,
  flatten,
  joinlist,
  letterPositions,
  map,
  min,
  takeUntil,
  without
};
