const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");
let maxNum = 0;
let row = 0;
let column = 0;

input.forEach((ele, idx) => {
  numArr = ele.split(" ");
  if (maxNum <= Math.max(...numArr)) {
    maxNum = Math.max(...numArr);
    row = idx + 1;
    column = numArr.indexOf(Math.max(...numArr).toString()) + 1;
  }
});

console.log(maxNum + "\n" + row + " " + column);
