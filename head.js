const head = function(array) {
  let headElement = array[0];
  if (headElement === true) {
    return array[0];
  } else {
    return undefined;
  }
};

module.exports = head;