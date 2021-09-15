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
const words = ["hello", "world", "lighthouse"];
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
