const eqArrays = require('./eqArrays');

const eqObjects = (obj1, obj2) => {
  let match = false;
  
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    match = false;
  } else {
    for (let key of Object.keys(obj1)) {
      if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
        if (eqArrays(obj1[key], obj2[key]) !== true) {
          match = false;
        } else {
          match = true;
        }
      }
      if (obj1[key] === obj2[key]) {
        match = true;
      }
    }
  }
  return match;
};

module.exports = eqObjects;