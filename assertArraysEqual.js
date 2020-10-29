const eqArrays = function(firstArray, secArray) {
  if (firstArray.length !== secArray.length) {
    return false;
  }
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secArray[i]) {
      return false;
    }
  }
  return true;
};


const assertArraysEqual = function(arrayOne, arrayTwo) {
  
  if (eqArrays(arrayOne, arrayTwo) === true) {
    return console.log(`✅✅✅ Assertation Passed: ${arrayOne} === ${arrayTwo}`);
  } else if (eqArrays(arrayOne, arrayTwo) === false){
    return console.log(`🛑🛑🛑 Assertation Failed: ${arrayOne} !== ${arrayTwo}`);
  }
};
console.log(eqArrays([1, 2, 3], [1, 3, 3]));
assertArraysEqual([1, 2, 3], [1, 3, 3]);

