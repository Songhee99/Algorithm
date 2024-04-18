const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [nk, ...coins] = fs.readFileSync(filePath).toString().trim().split("\n");
let [n, k] = nk.split(" ");
let count = 0;

for (coin of coins.reverse()) {
  if (+k == 0) return console.log(count);
  if (+k < +coin) continue;

  let plusCount = parseInt(+k / +coin);
  k %= +coin;
  count += plusCount;
}

console.log(count);
