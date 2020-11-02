const without = function(source, itemsToRemove) {
  let newArray = [];
  for (let index of source) {
    if(!itemsToRemove.includes(index)) {
      newArray.push(index);
    }
  }
  return newArray;
};

module.exports = without;