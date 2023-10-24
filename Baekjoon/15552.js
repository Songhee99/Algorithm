const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let nums = [];

for (let idx = 0; idx < +input.length - 1; idx++) {
  nums.push(input[idx + 1].split(" ").map((num) => +num));
  process.stdout.write(nums[idx][0] + nums[idx][1]);
}
