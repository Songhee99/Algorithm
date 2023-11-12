const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let arr = Array(+input)
  .fill()
  .map((num, i) => i + 1);

let sum = arr.reduce((prev, next) => {
  return prev + next;
}, 0);

console.log(sum);
