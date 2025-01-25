const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, ns, m, ms] = fs.readFileSync(filePath).toString().trim().split("\n");
const cranes = ns
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);
const boxes = ms
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);

if (cranes[0] < boxes[0]) return console.log(-1);

let start = 1;
let end = m;

while (start <= end) {
  const mid = Math.floor((start + end) / 2);
  let craneIdx = 0;
  let boxIdx = 0;

  while (boxIdx < +m) {
    if (craneIdx == +n || boxes[boxIdx] > cranes[craneIdx]) break;
    boxIdx += mid;
    craneIdx++;
  }

  if (boxIdx >= m) end = mid - 1;
  else start = mid + 1;
}

console.log(start);
