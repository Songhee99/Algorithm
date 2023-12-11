const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let newInput = [];
let finalArr = [];

input.forEach((nums) => newInput.push(nums.split(" ")));

newInput[1].forEach((num) => {
  if (+num < +newInput[0][1]) {
    finalArr.push(num);
  }
});

console.log(finalArr.join(" "));
