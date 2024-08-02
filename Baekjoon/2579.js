const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, ...stairs] = fs.readFileSync(filePath).toString().trim().split("\n");

if (n == 1) return console.log(stairs[0]);
if (n == 2) return console.log(+stairs[0] + +stairs[1]);

const stairsSum = new Array(+n).fill(0);

stairsSum[0] = +stairs[0];
stairsSum[1] = +stairs[0] + +stairs[1];
stairsSum[2] = Math.max(+stairs[0] + +stairs[2], +stairs[1] + +stairs[2]);

for (i = 3; i < +n; i++) {
  stairsSum[i] = Math.max(
    +stairs[i] + stairsSum[i - 2],
    +stairs[i] + +stairs[i - 1] + stairsSum[i - 3]
  );
}

console.log(stairsSum[n - 1]);
