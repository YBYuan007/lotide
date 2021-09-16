
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


const assertArraysEqual = function(actual, expected) {
  console.log (actual, expected);
  if (eqArrays(actual,expected)) {
    console.log(`😃Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`😭Assertion Failed: [${actual}] !== [${expected}]`);
  }
};





const words = ["ground", "control", "to", "major", "tom"];


const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]); // define results1, 
// console.log(results1);
assertArraysEqual(results1 ,[ 'g', 'c', 't', 'm', 't' ] )

// Our map function will take in two arguments:

// An array to map
// A callback function
// The map function will return a new array based on the results of the callback function.
