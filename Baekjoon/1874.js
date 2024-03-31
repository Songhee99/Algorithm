const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, ...nums] = fs.readFileSync(filePath).toString().trim().split("\n");
let result = [];
let stack = [];
let count = 1;

for (i = 0; i < +n; i++) {
  while (1) {
    if (stack.length == 0 || nums[i] > stack[stack.length - 1]) {
      if (nums[i] < count) return console.log("NO");
      stack.push(count);
      result.push("+");
      count++;
    } else if (nums[i] == stack[stack.length - 1]) {
      stack.pop();
      result.push("-");
      break;
    } else {
      stack.pop();
      result.push("-");
    }
  }
}

console.log(result.join("\n"));
