const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const nums = fs.readFileSync(filePath).toString().trim().split("");

let sum = nums.reduce((arr, cur) => {
  return arr + Math.pow(+cur, 5);
}, 0);

console.log(sum);
