const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let sum = [];

for (let i = 0; i < input.length; i++) {
  let num = input[i].split(" ");
  sum.push(+num[0] + +num[1]);
}

sum.pop();
console.log(sum.join("\n"));
