const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let n = input.length;
let sum = [];

for (let i = 0; i < n; i++) {
  let num = input[i].split(" ");
  sum.push(+num[0] + +num[1]);
}

console.log(sum.join("\n"));
