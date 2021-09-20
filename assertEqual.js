// // FUNCTION IMPLEMENTATION
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log("😃Assertion Passed: [" + actual + "] === [" + expected + "]");
//   } else {
//     console.log("😭Assertion Failed: [" + actual + "] !== [" + expected + "]");
//   }
// };


// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    // console.log(`😃Assertion Passed: [${actual}] === [${expected}]`);
    return `😃Assertion Passed: [${actual}] === [${expected}]` ; 
  } else {
    // console.log(`😭Assertion Failed: [${actual}] !== [${expected}]`);
    return `😭Assertion Failed: [${actual}] !== [${expected}]`; 
  }
};




// // TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);

module.exports=assertEqual;

