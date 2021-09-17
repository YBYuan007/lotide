const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😃Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`😭Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const findKey = function (obx, callback) {
  // take the object and find the value --- which is also an object 
  // and find the value(object)'s value lol 
  const a = Object.values(obx) ; 
  
  for (let i = 0 ; i < a.length; i ++ ) {
    if (callback(a[i])){
      // console.log(Object.keys(obx)[i]);
      return Object.keys(obx)[i] ; 
    } 
  }
  // console.log(undefined); 
  return undefined; 
}

const f = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"

assertEqual(f, "noma");

// Implement the function findKey which takes in an object and a callback. 
// It should scan the object and return the first key for which the callback returns a truthy value.
//  If no key is found, then it should return undefined.
