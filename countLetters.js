const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertation Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertation Failed: ${actual} !== ${expected}`);
  }
};


const countLetters = (string) => {
  const numOfLetters = {};
  let num = 1;
  
  for (let i = 0; i < string.length; i++) {
    let letter = string[i];
    if (letter in numOfLetters) {
      numOfLetters[letter] += 1;
    } else {
      numOfLetters[letter] = num;
    }
  }
  return JSON.stringify(numOfLetters, null, '\t');
}