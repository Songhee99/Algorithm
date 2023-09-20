const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [a, b, v] = fs.readFileSync(filePath).toString().trim().split(" ");
let dayOne = +a - +b;
let lastDay = +v - +b;

console.log(Math.ceil(lastDay / dayOne));
