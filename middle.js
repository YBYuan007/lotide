const assertArraysEqual = function(a, b) {
  if (a.length !== b.length) {
    console.log("😭 two arrays dont have same number of length")
  } else {
    for (let i = 0 ; i < a.length; i ++ ){
      if (a[i] !== b[i]){
        console.log("😭 elements in first array is different from elements in second array") 
        break; 
      } else {
        if (i === a.length-1) {
          console.log("😇 They are the same!!") 
        } else {
          continue;
        }
      }
    }
  }
}

// ACTUAL FUNCTION
const middle = function(array) {
  let result = [];
  if (array.length <=2) {
  } else if (array.length %2 === 0 ){
    console.log("even");
    result.push(array[array.length / 2 -1 ]);
    result.push(array[array.length / 2 ]);
  } else {
    result.push(array[Math.floor(array.length / 2)]); 
  } 
  console.log(result); 
}

// TEST CODE
// ...


middle([1]) // => []
middle([1, 2]) // => []
middle([1, 2, 3]) // => [2] 3/2 = 1.5 
middle([1, 2, 3, 4, 5]) // => [3] 5/2 = 2.5 ->2
middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]

