const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let inputArr;
for (let i = 0; i < input.length; i++) {
  inputArr = input[i].split(" ").map((item) => +item);
}

const isModulo = (value) => {
  return value % inputArr[2];
};

const isPlusModulo = () => {
  return isModulo(inputArr[0]) + isModulo(inputArr[1]);
};

const isMultiplModulo = () => {
  return isModulo(inputArr[0]) * isModulo(inputArr[1]);
};

console.log(isModulo(inputArr[0] + inputArr[1]));
console.log(isModulo(isPlusModulo()));
console.log(isModulo(inputArr[0] * inputArr[1]));
console.log(isModulo(isMultiplModulo()));
