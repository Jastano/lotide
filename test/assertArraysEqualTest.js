const assertEqual = require("../assertEqual");
const assertArraysEqual = require("../assertArraysEqual");

// tests
assertArraysEqual([1, 2, 3], [1, 2, 3]); 
assertArraysEqual([1, 2, 3], [3, 2, 1]); 