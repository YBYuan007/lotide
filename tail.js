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


const tail = function(ar) {
  // console.log(ar);
  let tt = ar[ar.length-1];
  // console.log(tt, typeof tt);
  return tt;
};

module.exports = tail; 
// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);

// a = ["Hello", "Lighthouse", "Labs"];
// assertEqual(tail(a), "Labs");


