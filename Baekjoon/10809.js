const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();
let str = "";

for (i = 97; i < 123; i++) {
  str += input.indexOf(String.fromCharCode(i));
  str += " ";
}

console.log(str);
