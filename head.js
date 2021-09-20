// // FUNCTION IMPLEMENTATION
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log("😃Assertion Passed: [" + actual + "] === [" + expected + "]");
//   } else {
//     console.log("😭Assertion Failed: [" + actual + "] !== [" + expected + "]");
//   }
// };


// FUNCTION IMPLEMENTATION
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`😃Assertion Passed: [${actual}] === [${expected}]`);
//   } else {
//     console.log(`😭Assertion Failed: [${actual}] !== [${expected}]`);
//   }
// };

// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// const assertEqual = require("./assertEqual.js");

const head = function(ar){
  return ar[0];
}

// assertEqual(head([ar]), 5);
// assertEqual(head([ar]), "Hello");

// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

module.exports=head;





