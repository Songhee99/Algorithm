const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, nums, x] = fs.readFileSync(filePath).toString().trim().split("\n");
const numsArr = nums
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
let count = 0;
let start = 0;
let end = +n - 1;

while (start < end) {
  const tmpSum = numsArr[start] + numsArr[end];
  if (tmpSum == +x) {
    count++;
    start++;
    end--;
  } else if (tmpSum < +x) start++;
  else end--;
}

console.log(count);
