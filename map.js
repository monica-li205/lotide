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
const words = ["ground", "control", "to", "major", "tom"];

words.map(() => {});
const map = function(array, callback) {
  
  // console.log('array: ', array);
  // console.log('callback: ', callback);
  
  const results = [];
for (let item of array) {
  results.push(callback(item));
}
  return results;
};

const results1 = map(words, word => word[0]);
const results2 = map(words, word => word + 's');
const results3 = map(words, word => word += 'cat')

assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(results2, [ 'grounds', 'controls', 'tos', 'majors', 'toms' ]);
assertArraysEqual(results3, [ 'groundcat', 'controlcat', 'tocat', 'majorcat', 'tomcat' ]);

