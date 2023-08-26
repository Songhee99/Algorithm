const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let yaksu = input[1].split(" ");

if (yaksu.length == 1) return console.log(yaksu[0] * yaksu[0]);
console.log(Math.max(...yaksu) * Math.min(...yaksu));
