
const eqArrays = function(a, b) {
  if (a.length !== b.length) {
    return false; 
  } else {
    for (let i = 0 ; i < a.length; i ++ ){
      if (a[i] !== b[i]){
        return false; 
        break; 
      } else {
        if (i === a.length-1) {
          return true
        } else {
          continue;
        }
      }
    }
  }
}

const eqObjects = function(object1, object2) {
  let ak = Object.keys(object1).sort() ;
  let bk = Object.keys(object2).sort() ;
  let result = false ; 
  if (ak.length  === bk.length && eqArrays(ak,bk) === true) {
    for (let subak of ak){
      // if primitive then compare values directly  
      if ((typeof object1[subak] ) !== "object"){
        if (object1[subak] === object2[subak]){
          continue; 
        } else {
          console.log(result);
          return result; 
        }
      } else {   // if not primitive, aka objects, then use eqArray to compare 
        console.log(eqArrays(object1[subak], object2[subak]));
        return eqArrays(object1[subak], object2[subak]);
      } 
    }
    result = true ; 
    }
  console.log(result);  
  return result;
};


const assertObjectsEqual=function(actual,expected) {
	const inspect =require('util').inspect;// <= add this line
  console.log(`Example label: ${inspect(actual)}`); 
  if ( eqObjects(actual, expected)) {
    console.log(`😃Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`😭Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

assertObjectsEqual(cd, dc);