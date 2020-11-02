const without = require('../without');
const assertArraysEqual = require('../assertArraysEqual')

const words = ["hello", "world", "lighthouse"];
without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2]
without(['cat', 'dog', 'mouse', 'cow', 4, 6], ['dog', 6]);
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);