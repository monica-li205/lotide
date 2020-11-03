const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("should return an empty array if given an array with 1 number",  () => {
    let actual = middle([1]);
    let expected = [];
    assert.deepEqual(actual, expected);
  });
  it("should return an empty array if given an array with 2 number",  () => {
    let actual = middle([1, 2]);
    let expected = [];
    assert.deepEqual(actual, expected);
  });
  it("should return the middle number if given an array of an odd length",  () => {
    let actual = middle([1, 2, 3, 4, 5]);
    let expected = [3];
    assert.deepEqual(actual, expected);
  });
  it("should return the 2 middle numeber if given an array of an even length",  () => {
    let actual = middle([1, 2, 3, 4, 5, 6]);
    let expected = [3, 4];
    assert.deepEqual(actual, expected);
  });
});