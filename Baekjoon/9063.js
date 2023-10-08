const fs = require("fs");
const filePath = process.platform == "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let total = +input[0];
let xArr = [];
let yArr = [];

for (i = 1; i <= total; i++) {
  let num = input[i].split(" ");
  xArr.push(num[0]);
  yArr.push(num[1]);
}

xArr.sort((a, b) => b - a);
yArr.sort((a, b) => b - a);

console.log((xArr[0] - xArr[total - 1]) * (yArr[0] - yArr[total - 1]));
