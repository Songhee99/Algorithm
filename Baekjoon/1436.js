const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let count = fs.readFileSync(filePath).toString().trim();
let num = 1666;

if (count == 1) return console.log(666);

while (count > 1) {
  if (num.toString().includes("666")) count--;
  num++;
}

console.log(num - 1);
