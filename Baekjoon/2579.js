const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, ...stairs] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

if (n == 1) return console.log(stairs[0]);
if (n == 2) return console.log(stairs[0] + stairs[1]);

let numsSum = Array.from({ length: n }, () => 0);
numsSum[0] = stairs[0];
numsSum[1] = stairs[0] + stairs[1];
numsSum[2] = Math.max(stairs[0] + stairs[2], stairs[1] + stairs[2]);

for (let i = 3; i < n; i++) {
  numsSum[i] = Math.max(
    numsSum[i - 2] + stairs[i],
    numsSum[i - 3] + stairs[i - 1] + stairs[i]
  );
}

console.log(numsSum[n - 1]);
