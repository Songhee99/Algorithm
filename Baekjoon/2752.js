const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const nums = fs.readFileSync(filePath).toString().trim().split(" ");

console.log(nums.sort((a, b) => +a - +b).join(" "));
