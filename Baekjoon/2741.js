const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const n = fs.readFileSync(filePath).toString().trim();
let result = [];

for (i = 1; i <= +n; i++) {
  result.push(i);
}

console.log(result.join("\n"));
