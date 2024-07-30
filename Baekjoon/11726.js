const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const n = +fs.readFileSync(filePath).toString().trim();

if (n == 1) return console.log(1);
if (n == 2) return console.log(2);

const dp = new Array(n).fill(0);
dp[0] = 1;
dp[1] = 2;

for (i = 2; i < n; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2]) % 10007;
}

console.log(dp[n - 1] % 10007);
