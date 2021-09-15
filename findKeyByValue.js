const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😃Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`😭Assertion Failed: [${actual}] !== [${expected}]`);
  }
};


const findKeyByValue = function (obj, targetValue){
  for (let key of Object.keys(obj)) {
    console.log(key);
    if (obj[key] === targetValue) {
      console.log("succ");
      console.log(key);
      return key; 
    } else {
      continue;
    }
  }

} 
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

// logic: loop the keys and then find the value --- if the value matches the target then return the key. 