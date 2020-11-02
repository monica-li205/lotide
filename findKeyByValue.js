const findKeyByValue = (tvShows, showName) => {
  let genre = '';
  
  for (let show of Object.keys(tvShows)) {
    if (showName === tvShows[show]) {
      genre = show;
    } else if (showName !== tvShows[show]) {
      genre = undefined;
    }
  }
  return genre;
};

module.exports = findKeyByValue;