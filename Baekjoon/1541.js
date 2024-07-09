const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();

let nums = [];
let sum = 0;
let tmpSum = 0;
const stack = [];

for (i = 0; i < input.length; i++) {
  if (!isNaN(input[i])) {
    nums.push(input[i]);
    continue;
  }

  if (stack.length) {
    if (input[i] == "+") tmpSum += +nums.join("");
    else {
      sum -= tmpSum;
      sum -= +nums.join("");
      tmpSum = 0;
    }
  } else {
    if (input[i] == "-") stack.push("-");
    sum += +nums.join("");
  }
  nums = [];
}

if (stack.length) {
  sum -= tmpSum;
  sum -= +nums.join("");
} else sum += +nums.join("");

console.log(sum);
