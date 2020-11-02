const assertArraysEqual = require('../assertArraysEqual');
const letterPositions = require('../letterPositions');

letterPositions('hello');
assertArraysEqual(letterPositions("hello").e, [1]);