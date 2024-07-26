const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, input] = fs.readFileSync(filePath).toString().trim().split("\n");
const files = input
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
let count = 0;
let end = 0;

for (let i = 0; i < +n - 1; i++) {
  if (i >= end) end = i;
  else count += end - i;

  for (let j = end + 1; j < +n; j++) {
    if (files[i] >= files[j] * 0.9) {
      count++;
      end = j;
    } else break;
  }
}

console.log(count);
