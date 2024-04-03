const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, arr] = fs.readFileSync(filePath).toString().trim().split("\n");
let aArr = arr.split(" ").map(Number);
let dp = new Array(+n).fill(1);

for (i = 0; i < n; i++) {
  for (j = 0; j < i; j++) {
    if (aArr[i] > aArr[j]) dp[i] = Math.max(dp[i], dp[j] + 1);
  }
}

console.log(Math.max(...dp));
