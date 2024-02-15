const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, ...nums] = fs.readFileSync(filePath).toString().trim().split("\n");

if (n == 1) return console.log(nums[0] + "\n" + nums[0] + "\n" + nums[0] + "\n" + 0);

let sortedNums = nums.sort((a, b) => +a - +b);

let average = Math.round(sortedNums.reduce((acc, cur) => +acc + +cur) / +n);
let median = sortedNums[Math.floor(+n / 2)];

let countedNum = new Map();
sortedNums.forEach((ele) => {
  if (countedNum.has(ele)) countedNum.set(ele, countedNum.get(ele) + 1);
  else countedNum.set(ele, 1);
});
let countedNumArr = [...countedNum].sort((a, b) => b[1] - a[1]);
let frequent = countedNumArr[0][1] == countedNumArr[1][1] ? countedNumArr[1][0] : countedNumArr[0][0];

let range = +sortedNums[+n - 1] - +sortedNums[0];

console.log(average + "\n" + median + "\n" + frequent + "\n" + range);
