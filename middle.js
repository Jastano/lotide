const eqArrays = require("./eqArrays"); {

}
const assertArraysEqual = require("./assertArraysEqual"); {

  }

const middle = function(array) {
  const mid = Math.floor(array.length / 2);

  if (array.length <= 2) {
    return [];
  }

  if (array.length % 2 === 0) {
    return [array[mid - 1], array[mid]];
  } else {
    return [array[mid]];
  }
};

module.exports = middle;
