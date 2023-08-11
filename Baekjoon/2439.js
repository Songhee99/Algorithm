const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString();
let num = +input;

for (let i = 0; i < num; i++) {
  console.log(" ".repeat(num - (i + 1)) + "*".repeat(i + 1));
}
