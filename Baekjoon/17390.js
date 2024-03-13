const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [nq, aArr, ...lq] = fs.readFileSync(filePath).toString().trim().split("\n");
let [n, q] = nq.split(" ");
let bArr = aArr.split(" ").sort((a, b) => +a - +b);
let bSumArr = new Array(+n + 1).fill(0);
let result = [];

bArr.forEach((ele, index) => {
  bSumArr[index + 1] = bSumArr[index] + +ele;
});

lq.forEach((ele) => {
  let [l, r] = ele.split(" ");
  let num = bSumArr[r] - bSumArr[l - 1];
  result.push(num);
});

console.log(result.join("\n"));
