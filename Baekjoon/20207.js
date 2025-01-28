const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
const schedule = input.map((v) => v.split(" ").map(Number));
let result = 0;

const calendar = Array.from({ length: 366 }, () => 0);
for (const [start, end] of schedule) {
  for (let i = start; i <= end; i++) {
    calendar[i]++;
  }
}

let col = 0;
let row = 0;

for (let d = 1; d < 367; d++) {
  if (calendar[d] && calendar[d] > 0) {
    row++;
    col = Math.max(col, calendar[d]);
  } else if (row > 0) {
    result += row * col;
    row = 0;
    col = 0;
  }
}

console.log(result);
