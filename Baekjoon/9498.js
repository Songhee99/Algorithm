const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  if (90 <= input) return "A";
  if (80 <= input) return "B";
  if (70 <= input) return "C";
  if (60 <= input) return "D";
  return "F";
}

console.log(solution(+input));
