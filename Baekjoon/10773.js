const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [k, ...nums] = fs.readFileSync(filePath).toString().trim().split("\n");
let rightNums = [];

nums.forEach((ele) => {
  if (ele == 0) rightNums.pop();
  else rightNums.push(+ele);
});

console.log(rightNums.length === 0 ? 0 : rightNums.reduce((acc, cur) => acc + cur));
