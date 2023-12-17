const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let sum = input[1].split("").reduce((acc, cur) => +acc + +cur);

console.log(sum);
