const assertArrayEqual = require("./assertArraysEqual"); 
const eqArrays = require("./eqArrays");

let a = []; 
const flatten=function (arr){
  for (let ar of arr ) {
    if (Array.isArray(ar)){
      // console.log("you are array")
      let br = ar ;  
      flatten(br); 
    } else {
      // console.log(ar);
      a.push(ar);
    }
  }
  // console.log(a);
  return a;
}; 
flatten([1, 2, [3, 4], 5, [6]]);

// flatten([1, 2, [3, 4], 5, [6]]) // => [1, 2, 3, 4, 5, 6]
// Array.isArray
