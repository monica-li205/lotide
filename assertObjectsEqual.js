const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected) === true) {
    return console.log(`✅✅✅ Assertation Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else if (eqArrays(actual, expected) === false){
    return console.log(`🛑🛑🛑 Assertation Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};
module.exports = assertObjectsEqual;