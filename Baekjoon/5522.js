const fs = require("fs");
const filePath = process.platform == "linux" ? "/dev/stdin" : "./input.txt";
let nums = fs.readFileSync(filePath).toString().trim().split("\n");

console.log(nums.reduce((prev, next) => +prev + +next));
