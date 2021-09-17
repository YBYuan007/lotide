
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


const takeUntil = function(array, callback) {
  // ...
  let result = [] ; 
  for (let a of array){
    if (!callback(a)){
      result.push(a) ; 
    } else {
      break;
    }
  }
  return result; 
}


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);

assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
// [ 1, 2, 5, 7, 2 ]
// ---
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]



// It will take in two parameters as well:

// The array to work with
// The callback (which Lodash calls "predicate")

// The function will return a "slice of the array with elements taken from the beginning." 
// It should keep going until the callback/predicate returns a truthy value.