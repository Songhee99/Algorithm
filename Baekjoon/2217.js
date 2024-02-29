const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, ...nums] = fs.readFileSync(filePath).toString().trim().split("\n");
let max = 0;
let count = 0;

let sortedNums = nums.sort((a, b) => +a - +b);

for (i = 0; i < +n; i++) {
  if (sortedNums[i] == sortedNums[i + 1]) {
    count++;
    continue;
  }
  let tmpMax = +sortedNums[i] * (+n - i + count);
  max = Math.max(max, tmpMax);
  count = 0;
}

console.log(max);
