const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let numArr = input[1].split(" ");

const collectSameNums = (num) => {
  if (input[2] == num) return true;
};

console.log(numArr.filter(collectSameNums).length);
