const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const n = +fs.readFileSync(filePath).toString().trim();

if (Math.sqrt(n) == parseInt(Math.sqrt(n))) return console.log(1);

const dp = new Array(n + 1).fill(Infinity);

dp[0] = 0;
dp[1] = 1;
dp[2] = 2;

for (let i = 3; i <= n; i++) {
  for (let j = 0; j ** 2 <= i; j++) {
    dp[i] = Math.min(dp[i], dp[i - j ** 2] + 1);
  }
}

console.log(dp[n]);
