const assertArraysEqual = function(a, b) {
  if (a.length !== b.length) {
    console.log("😭 two arrays dont have same number of length")
  } else {
    for (let i = 0 ; i < a.length; i ++ ) {
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

const without = function (m,n) {
  let a = []; 
  for (let mm of m ) {
    if (!n.includes(mm)){
      a.push(mm);
    }
  }
  console.log(a);
}


without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

