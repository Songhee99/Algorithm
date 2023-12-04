const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let inputArr;

for (let i = 0; i < input.length; i++) {
  inputArr = input[i].split(" ").map((item) => +item);
}

function solution(inputArr) {
  const addtion = inputArr[0] + inputArr[1];
  const subtraction = inputArr[0] - inputArr[1];
  const multipl = inputArr[0] * inputArr[1];
  const division = Math.floor(inputArr[0] / inputArr[1]);
  const modulo = inputArr[0] % inputArr[1];

  return addtion + "\n" + subtraction + "\n" + multipl + "\n" + division + "\n" + modulo;
}

console.log(solution(inputArr));
