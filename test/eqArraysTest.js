const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays");

// Tests
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);         
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);        
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);  
