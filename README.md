# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @gacquroff/lotide`

**Require it:**

`const _ = require('@gacquroff/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: Return the first element of `array`
* `tail(array)`: Return `array` without the first element
* `middle(array)`: Returns an array containing the middle element of `array` if `array.length` is even. Otherwise returns an array containing the middle two elements.
* `assertArraysEqual(arr1, arr2)`: Check if two arrays are equal. Does not work on objects nested inside the array. Prints equality message to the console.
* `assertEqual(value1, value2)`: Check if two primitive values are equal. Prints equality message to the console.
* `assertObjectsEqual(obj1, obj2)`: Check if two objects are equal. Works with nested objects, but does not work with objects nested inside arrays inside the parent objects.
* `countLetter(string)`: Returns an object containing the counts of each letter in `string`.
* `countOnly(allItems, itemsToCount)`: Returns an object containing the counts of each item in `itemsToCount` that appears in `allItems`.
* `eqArrays(arr1, arr2)`: Returns true if `arr1` is equal to `arr2`. Returns false otherwise. Works with nested arrays.
* `eqObjects(obj1, obj2)`: Returns true if `obj1` is equal to `obj2`. Returns false otherwise. Works with nested objects, but does not work with objects nested inside arrays inside the parent objects.
* `findKey(obj, callback)`: Returns the key of the first property in `obj` that causes `callback` to return true.
* `findKeyByValue(obj, value)`: Returns the key of the first property in `obj` that has the value `value`.
* `flatten(array)`: Returns an array of depth = 1 containing all elements in `array`.
* `joinList(array)`: Returns a string containing all elements of `array` concatenated together with `,`.
* `letterPositions(string)`: Returns an object where each property has key of letter in `string` and value of an array containing all zero-indexed positions that letter appears in string.
* `map(array, callback)`: Returns an array that contains each element of `array` transformed by applying a`callback` function.
* `min(numbers)`: Returns the smallest number in an array of `numbers`.
* `takeUntil(array, callback)`: Returns a deep copy of `array` up until a`callback` function applied to an `array` element returns true.
* `without(array, itemsToExclude)`: Returns a shallow copy of `array` with all  items present in `itemsToExclude` excluded.
