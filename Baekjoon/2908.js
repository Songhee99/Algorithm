const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");

let num1 = 0;
let num2 = 0;

input.reduce((acc, cur) => {
  num1 = acc.split("").reverse().join("");
  num2 = cur.split("").reverse().join("");
});

console.log(Math.max(num1, num2));
