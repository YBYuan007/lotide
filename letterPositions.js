const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (var i of sentence ){
    if (results[i] === undefined) {
      let index = sentence.indexOf(i);
      results[i] = [];
      results[i].push(index); 
    } else {
      startIndex =  results[i][results[i].length -1]; 
      index = sentence.indexOf(i, startIndex+1 )
      results[i].push(index);
    }
  }
  delete results[" "];
  console.log(results);
  return results;
};

// logic: doesnt matter if it is the first time find this letter, need to +=  the index (string) as the value
// if it is first time then += "index" then second time += " index"

// return all the indices (zero-based positions) in the string where each character is found.

letterPositions("hello");
letterPositions("lighthouse in the house") 

// str.charAt(str.length-1) 
// lighthouse in the house

// if (sentence[i] === /\s/g ){
//   continue;
// } else 