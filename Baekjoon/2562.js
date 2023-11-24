const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let maxNum = String(Math.max(...input));
let maxNumIdx = input.indexOf(maxNum);

console.log(maxNum);
console.log(maxNumIdx + 1);
