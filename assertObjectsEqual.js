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

const eqObjects = (obj1, obj2) => {
  let match = false;
  
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    match = false;
  } else {
    for (let key of Object.keys(obj1)) {
      if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
        if (eqArrays(obj1[key], obj2[key]) !== true) {
          match = false;
        } else {
          match = true;
        }
      }
      if (obj1[key] === obj2[key]) {
        match = true;
      }
    }
  }
  return match;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected) === true) {
    return console.log(`✅✅✅ Assertation Passed: ${actual} === ${expected}`);
  } else if (eqArrays(actual, expected) === false){
    return console.log(`🛑🛑🛑 Assertation Failed: ${actual} !== ${expected}`);
  }
};
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba);