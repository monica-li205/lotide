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
    console.log(`✅✅✅ Assertation Passed: ${arrayOne} === ${arrayTwo}`);
  } else if (eqArrays(arrayOne, arrayTwo) === false) {
    console.log(`🛑🛑🛑 Assertation Failed: ${arrayOne} !== ${arrayTwo}`);
  }
};

const letterPositions = function(sentence) {
  const results = {};
  
  for (let i = 0; i < sentence.length; i++) {
    let num = [];
    let letter = sentence[i];

    if (Object.keys(results).includes(letter)) {
      results[letter].push(i);
    } else {
      num.push(i);
      results[letter] = num;
    }
  }
  return results;
};

console.log(letterPositions('hello'));
console.log(assertArraysEqual(letterPositions("hello").e, [1]));