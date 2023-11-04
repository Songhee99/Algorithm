const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let n = +input[0];
let str = "";

for (i = 0; i < n; i++) {
  let num = input[i + 1].split(" ");
  str = str + `Case #${i + 1}: ` + (+num[0] + +num[1]) + "\n";
}

console.log(str);
