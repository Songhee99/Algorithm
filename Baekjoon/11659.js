const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [nm, nArr, ...cases] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
let [n, m] = nm.split(" ");
let nums = nArr.split(" ");
let memo = [0, +nums[0]];
let peek = 1;
let result = [];

cases.forEach((ele) => {
  let [prev, next] = ele.split(" ");
  let nextSum = 0;

  if (+next > peek) {
    for (i = peek; i < +next; i++) {
      memo[i + 1] = memo[i] + +nums[i];
    }
    peek = +next;
  }
  nextSum = memo[+next];

  let prevSum = memo[+prev - 1];
  let sum = nextSum - prevSum;

  result.push(sum);
});

console.log(result.join("\n"));
