const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const n = +fs.readFileSync(filePath).toString().trim();

if (n == 1 || n == 2) return console.log(1);

const dp = Array.from({ length: n - 1 }, () => [0n, 0n]);
dp[0][0] = 1n;

for (let i = 1; i < n - 1; i++) {
  dp[i][0] = dp[i - 1][0] + dp[i - 1][1];
  dp[i][1] = dp[i - 1][0];
}

console.log((dp[n - 2][0] + dp[n - 2][1]).toString());
