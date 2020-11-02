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

module.exports = letterPositions;