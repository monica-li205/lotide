// const assertEqual = require('../assertEqual');
// const tail = require('../tail');

// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!
const assert = require('chai').assert;
const tail   = require('../tail');
const array = [5,6,7];

describe("#tail", () => {
  it("should return the tail end of an array",  () => {
    assert.deepEqual(tail(array), [6,7]);
  });
  it('the original array should be unmodified', () => {
    assert.strictEqual(array.length, 3);
  });
});