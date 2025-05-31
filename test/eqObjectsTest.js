const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe("#eqObjects", () => {
  it("returns true for { a: '1', b: '2' } and { b: '2', a: '1' }", () => {
    const a = { a: "1", b: "2" };
    const b = { b: "2", a: "1" };
    assert.strictEqual(eqObjects(a, b), true);
  });

  it("returns false for { a: '1', b: '2' } and { a: '1', b: '2', c: '3' }", () => {
    const a = { a: "1", b: "2" };
    const b = { a: "1", b: "2", c: "3" };
    assert.strictEqual(eqObjects(a, b), false);
  });

  it("returns true for objects with array values", () => {
    const a = { a: ["1", "2"], b: "2" };
    const b = { b: "2", a: ["1", "2"] };
    assert.strictEqual(eqObjects(a, b), true);
  });

  it("returns false when array values differ", () => {
    const a = { a: ["1", "2"], b: "2" };
    const b = { b: "2", a: ["1", "3"] };
    assert.strictEqual(eqObjects(a, b), false);
  });
});
