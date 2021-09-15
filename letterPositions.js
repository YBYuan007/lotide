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


// return all the indices (zero-based positions) in the string where each character is found.

letterPositions("hello");
letterPositions("lighthouse in the house") 
