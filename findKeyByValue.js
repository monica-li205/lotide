const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertation Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertation Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = (tvShows, showName) => {
  let genre = '';
  
  for (let show of Object.keys(tvShows)) {
    //console.log(show, ', ', tvShows[show]);
    if (showName === tvShows[show]) {
      genre = show;
    } else if (showName !== tvShows[show]) {
      genre = undefined;
    }
  }
  return genre;
};



const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
console.log(findKeyByValue(bestTVShowsByGenre, 'The Wire'));
console.log(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"));

console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"));
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined));
