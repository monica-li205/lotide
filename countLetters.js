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
  return numOfLetters;
};

module.exports = countLetters;