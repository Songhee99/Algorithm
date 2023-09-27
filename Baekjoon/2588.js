const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// let input = fs.readFileSync("./input.txt").toString().trim().split("\r\n");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let inputArr = [];

inputArr.push(+input[0]);
const newInputArr = inputArr.concat(input[1].split("").map((item) => +item));

const fisrtMultipl = newInputArr[0] * newInputArr[3];
const secondMultipl = newInputArr[0] * newInputArr[2];
const thirdMultipl = newInputArr[0] * newInputArr[1];
const finalValue = fisrtMultipl + secondMultipl * 10 + thirdMultipl * 100;

console.log(fisrtMultipl);
console.log(secondMultipl);
console.log(thirdMultipl);
console.log(finalValue);
