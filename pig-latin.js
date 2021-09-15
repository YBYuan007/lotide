const args = process.argv;

let result = "";
for (let i = 2; i < args.length; i ++) {
  for (let r = 1; r < args[i].length; r ++) {
    result += args[i][r];
  }
  result += args[i][0];
  result += "ay";
  result += " ";
}
console.log(result);
