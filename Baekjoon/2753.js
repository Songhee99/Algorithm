const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  if (input % 100 == 0) {
    if (Math.floor(input / 100) % 4 == 0) return 1;
    return 0;
  }
  if (input % 4 == 0) return 1;
  return 0;
}

console.log(solution(input));
