const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let inputArr;
for (let i = 0; i < input.length; i++) {
  inputArr = input[i].split(" ").map((item) => +item);
}

function solution(inputArr) {
  if (inputArr[0] > inputArr[1]) return ">";
  if (inputArr[0] < inputArr[1]) return "<";
  return "==";
}

console.log(solution(inputArr));
