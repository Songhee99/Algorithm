const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input = input.splice(1);
input.sort((a, b) => a - b);

console.log(input.join("\n"));
