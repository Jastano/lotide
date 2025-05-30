const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, (word) => word[0]);
console.log(results1); // Expected output: [ 'g', 'c', 't', 'm', 't' ]
const assertArraysEqual = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    console.log(`❌ Assertion Failed: Arrays have different lengths.`);
    return;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log(`❌ Assertion Failed: Arrays differ at index ${i}.`);
      return;
    }
  }
  console.log(`✅ Assertion Passed: Arrays are equal.`);
};

const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, (word) => word[0]);
const expected1 = ['g', 'c', 't', 'm', 't'];

assertArraysEqual(results1, expected1);
