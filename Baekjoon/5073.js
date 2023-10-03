const fs = require("fs");
const filePath = process.platform == "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const check = (numArr) => {
  numArr = numArr.split(" ").sort((a, b) => +a - +b);
  if (+numArr[0] + +numArr[1] <= +numArr[2]) return console.log("Invalid");

  let numSet = new Set(numArr);
  if (numSet.size == 1) return console.log("Equilateral");
  if (numSet.size == 2) return console.log("Isosceles");
  return console.log("Scalene");
};

for (i = 0; i < input.length - 1; i++) {
  check(input[i]);
}
