const eqArrays = function(firstArray, secArray) {
  // if (firstArray.length !== secArray.length) {
  //   return false;
  // }
  
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secArray[i]) {
      return false;
    }
  }
  return true;
};


const assertArraysEqual = function(arrayOne, arrayTwo) {
  
  if (eqArrays(arrayOne, arrayTwo) === true) {
    console.log(`✅✅✅ Assertation Passed: ${arrayOne} === ${arrayTwo}`);
  } else if (eqArrays(arrayOne, arrayTwo) === false){
    console.log(`🛑🛑🛑 Assertation Failed: ${arrayOne} !== ${arrayTwo}`);
  }
};

const middle = function(array) {
  let indexOfMiddle = 0;
  let midArray = [];
  let typeOfArray = '';
  
  if (array.length === 0 || array.length === 1 || array.length === 2) {
    return midArray;
  } else if(array.length % 2 === 0) {
    typeOfArray = 'even';
    indexOfMiddle = (array.length / 2) - 1;
  } else if (array.length % 2 !== 0) { 
    typeOfArray = 'odd';
    indexOfMiddle = (array.length - 1) / 2;
  }

  if (typeOfArray === 'even') {
    midArray.push(array[indexOfMiddle], array[indexOfMiddle + 1]);
  } else if (typeOfArray === 'odd') {
    midArray.push(array[indexOfMiddle]);
  }
  return midArray;
};

middle([1]) // => []
middle([1, 2]) // => []

middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]

middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]

assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3,4])