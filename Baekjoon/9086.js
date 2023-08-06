const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let strArr = "";

for (let i = 0; i < input[0]; i++) {
  let str = input[i + 1].trim();
  strArr += str.slice(0, 1);
  strArr += str.slice(str.length - 1, str.length);
  strArr += "\n";
}

console.log(strArr);
