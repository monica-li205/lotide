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

const without = function(source, itemsToRemove) {
  let newArray = [];
  for (let index of source) {
    if(!itemsToRemove.includes(index)) {
      newArray.push(index);
    }
  }
  return console.log(newArray);
};

without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2]
without(['cat', 'dog', 'mouse', 'cow', 4, 6], ['dog', 6]);
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);