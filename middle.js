const middle = function(array) {
  let indexOfMiddle = 0;
  let midArray = [];
  let typeOfArray = '';
  
  if (array.length === 0 || array.length === 1 || array.length === 2) {
    return midArray;
  } else if(array.length % 2 === 0) {
    typeOfArray = 'even';
    indexOfMiddle = (array.length / 2) - 1;
  } else if (array.length % 2 !== 0) { 
    typeOfArray = 'odd';
    indexOfMiddle = (array.length - 1) / 2;
  }

  if (typeOfArray === 'even') {
    midArray.push(array[indexOfMiddle], array[indexOfMiddle + 1]);
  } else if (typeOfArray === 'odd') {
    midArray.push(array[indexOfMiddle]);
  }
  return midArray;
};

module.exports = middle;