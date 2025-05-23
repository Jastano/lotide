const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`❌ Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const flatten = function(array) {
  let flatArray = [];

  for (let item of array) {
    if (Array.isArray(item)) {
      // Push each element from the nested array
      for (let subItem of item) {
        flatArray.push(subItem);
      }
    } else {
      flatArray.push(item);
    }
  }

  return flatArray;
};
//tests
console.log(flatten([1, 2, [3, 4], 5, [6]])); // should log: [1, 2, 3, 4, 5, 6]
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([[1], 2, 3]), [1, 2, 3]);
assertArraysEqual(flatten([1, [2, 3], [4], 5]), [1, 2, 3, 4, 5]);
assertArraysEqual(flatten([]), []);
assertArraysEqual(flatten([[], [1, 2]]), [1, 2]);