const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#letterPositions", () => {
  const result = letterPositions("hello");

  it("returns [0] for 'h'", () => {
    assert.deepEqual(result.h, [0]);
  });

  it("returns [1] for 'e'", () => {
    assert.deepEqual(result.e, [1]);
  });

  it("returns [2, 3] for 'l'", () => {
    assert.deepEqual(result.l, [2, 3]);
  });

  it("returns [4] for 'o'", () => {
    assert.deepEqual(result.o, [4]);
  });
});
