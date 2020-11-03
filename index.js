// index.js
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertArraysEqual = require('./assertArraysEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const assertEquals = require('./assertEquals');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects')
const findKeyByValue = require('./findKeyByValue');
const findKey = require('./findKey');
const letterPositions = require('./letterPositions');
const map = require('./map');
const takeUntil = require('./takeUntil');
const without = require('./without');


module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  assertArraysEqual: assertArraysEqual,
  assertEquals: assertEquals,
  countLetters: countLetters,
  assertObjectsEqual: assertObjectsEqual,
  countOnly: countOnly,
  eqArrays: eqArrays,
  eqObjects: eqObjects,
  findKeyByValue: findKeyByValue,
  findKey: findKey,
  letterPositions: letterPositions,
  map: map,
  takeUntil: takeUntil, 
  without: without,
};