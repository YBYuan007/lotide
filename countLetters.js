const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😃Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`😭Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

// const countLetters = function (allItems) {
//   let newObject={};
//   for (var i of allItems ){
//     if (newObject[i] === /\s/g ){
//       continue;
//     } else if (newObject[i] === undefined) {
//       newObject[i] =1 ; 
//     } else {
//       newObject[i] += 1;
//     }
//   }
//   console.log(newObject);
//   return newObject;
  
// }

const countLetters = function (allItems) {
  let newObject={};
  for (var i of allItems ){
    if (newObject[i] === undefined) {
      newObject[i] =1 ; 
    } else {
      newObject[i] += 1;
    }
  }
  delete newObject[" "];
  console.log(newObject);
  return newObject;
  
}




countLetters("lighthouse in the house") 
