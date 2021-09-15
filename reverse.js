const args = process.argv;
// for (let i = 0   ; i < process.argv ; i ++ ){
//   console.log(i);
// };
let result = "";
for (let i  = 2; i < args.length; i ++) {
  for (let r = args[i].length - 1; r >= 0; r --) {
    result += args[i][r];
  }
  result += "\n";
}
console.log(result);


