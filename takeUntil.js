const takeUntil = function(array, callback) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i]) === true && i >= newArray.length) {
      return newArray;
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
};
module.exports = takeUntil;