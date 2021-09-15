const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😃Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`😭Assertion Failed: [${actual}] !== [${expected}]`);
  }
};


// The function should report back how many instances 
// of each string were found in the allItems array of strings.

const countOnly = function (allItems, itemsToCount) {
  let newObject={};
  for (let item of allItems) {
    if (itemsToCount[item]=== true ) {
      if (newObject[item] === undefined) {
        newObject[item] =1 ; 
      } else {
        newObject[item] += 1
      }
    }
  }
  console.log(newObject) ; 
  return newObject ; 
}


// for (var planet in planetMoons){
//   var numberOfMoons = planetMoons[planet]; 
//   console.log(planet , numberOfMoons) ;
// }


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

// check the result (an object) of the countOnly function 
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
