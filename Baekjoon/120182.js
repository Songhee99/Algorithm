const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// let input = fs.readFileSync("./input.txt").toString().trim().split("\n").join();
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  return input + "??!";
}

console.log(solution(input));
