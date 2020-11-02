const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arrayOne, arrayTwo) {
  
  if (eqArrays(arrayOne, arrayTwo) === true) {
    return console.log(`✅✅✅ Assertation Passed: ${arrayOne} === ${arrayTwo}`);
  } else if (eqArrays(arrayOne, arrayTwo) === false){
    return console.log(`🛑🛑🛑 Assertation Failed: ${arrayOne} !== ${arrayTwo}`);
  }
};

module.exports = assertArraysEqual;