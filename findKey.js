const findKey = (objects, callback) => {
  
  for (let property in objects) {
    if (callback(objects[property])) {
      return property;
    }
  }
  return undefined;
};
module.exports = findKey;