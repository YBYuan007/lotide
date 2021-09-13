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
    console.log(`😃Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`😭Assertion Failed: [${actual}] !== [${expected}]`);
  }
};


const tail = function(ar) {
  console.log(ar);
  return ar.slice(1);
};

// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");


