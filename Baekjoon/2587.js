const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\r\n")
  .sort((a, b) => a - b);

let midNum = input[2];
let averNum = input.reduce((acc, cur) => +acc + +cur) / 5;

console.log(averNum);
console.log(midNum);
