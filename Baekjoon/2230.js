const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [nm, ...nums] = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, m] = nm.split(" ");
const sortedNums = nums.map(Number).sort((a, b) => a - b);

if (n == 2) return console.log(sortedNums[1] - sortedNums[0]);

let minNum = Infinity;
let start = 0;
let end = 1;

while (start <= end && end < n) {
  const num = sortedNums[end] - sortedNums[start];

  if (num < m) end++;
  else if (num == m) return console.log(m);
  else {
    minNum = Math.min(minNum, num);
    start++;
  }
}

console.log(minNum);
