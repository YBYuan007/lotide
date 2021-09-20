// const assertEqual = function(actual, expected) {
//   console.log (actual, expected);
//   if (actual === expected) {
//     console.log(`😃Assertion Passed: [${actual}] === [${expected}]`);
//   } else {
//     console.log(`😭Assertion Failed: [${actual}] !== [${expected}]`);
//   }
// };


const assertEqual = require("./assertEqual"); 

const eqArrays = function(a, b) {
  if (a.length !== b.length) {
    return false; 
  } else {
    for (let i = 0 ; i < a.length; i ++ ){
      if (a[i] !== b[i]){
        return false; 
        break; 
      } else {
        if (i === a.length-1) {
          return true
        } else {
          continue;
        }
      }
    }
  }
}


module.exports = {eqArrays,assertEqual}; 

  // eqArrays([1, 2, 3], [1, 2, 3]) // => true
  // eqArrays([1, 2, 3], [3, 2, 1]) // => false
  
  // eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
  // eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false
  // eqArrays([1, 2, 3], [1, 2, 3])
  // assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS


