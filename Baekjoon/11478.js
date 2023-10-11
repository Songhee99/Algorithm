const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();
let subStr = new Set();

for (i = 0; i < input.length; i++) {
  for (j = i + 1; j <= input.length; j++) {
    subStr.add(input.slice(i, j));
  }
}

console.log(subStr.size);
