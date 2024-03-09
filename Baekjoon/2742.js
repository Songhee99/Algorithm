const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const n = fs.readFileSync(filePath).toString().trim();
let result = [];

for (i = +n; i > 0; i--) {
  result.push(i);
}

console.log(result.join("\n"));
