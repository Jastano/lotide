const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe("#findKeyByValue", () => {
  const shows = {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama: "The Wire"
  };

  it("returns 'drama' for 'The Wire'", () => {
    assert.strictEqual(findKeyByValue(shows, "The Wire"), "drama");
  });

  it("returns 'comedy' for 'Brooklyn Nine-Nine'", () => {
    assert.strictEqual(findKeyByValue(shows, "Brooklyn Nine-Nine"), "comedy");
  });

  it("returns undefined for 'That '70s Show'", () => {
    assert.strictEqual(findKeyByValue(shows, "That '70s Show"), undefined);
  });
});
