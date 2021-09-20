
// const eqArrays = function(a, b) {
//   if (a.length !== b.length) {
//     return false; 
//   } else {
//     for (let i = 0 ; i < a.length; i ++ ){
//       if (a[i] !== b[i]){
//         return false; 
//         break; 
//       } else {
//         if (i === a.length-1) {
//           return true
//         } else {
//           continue;
//         }
//       }
//     }
//   }
// }

const {eqArrays} = require("./eqArrays") ; 

const assertArraysEqual = function(actual, expected) {
  // console.log (actual, expected);
  if (eqArrays(actual,expected)) {
    console.log(`😃Assertion Passed: [${actual}] === [${expected}]`);
    return `😃Assertion Passed: [${actual}] === [${expected}]`;
  } else {
    console.log(`😭Assertion Failed: [${actual}] !== [${expected}]`);
    return `😭Assertion Failed: [${actual}] !== [${expected}]`;
  }
};

module.exports = {assertArraysEqual ,eqArrays } ; 



// const words = ["hello", "world", "lighthouse"];
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);
