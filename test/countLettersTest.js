const assertObjectsEqual = require('../assertObjectsEqual');
const countLetters = require('../countLetters');

let actual = countLetters('Lighthouse Labs');
let expected = {
  "L": 2,
  "i": 1,
  "g": 1,
  "h": 2,
  "t": 1,
  "o": 1,
  "u": 1,
  "s": 2,
  "e": 1,
  " ": 1,
  "a": 1,
  "b": 1
};


assertObjectsEqual(actual, expected);