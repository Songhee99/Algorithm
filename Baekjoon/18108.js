const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// let input = fs.readFileSync("./input.txt").toString().trim().split("\n");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const inputNum = Number(input);

function solution(inputNum) {
  return inputNum - 543;
}

console.log(solution(inputNum));
