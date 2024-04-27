const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();
const numArr = new Array(11).fill(0);

input.split("").forEach((ele) => {
  numArr[+ele]++;
});

numArr[11] = Math.ceil((numArr[6] + numArr[9]) / 2);
numArr[6] = 0;
numArr[9] = 0;

console.log(Math.max(...numArr));
