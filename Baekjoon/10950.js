const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

for (let i = 0; i < +input[0]; i++) {
  let nums = input[i + 1].split(" ").map((num) => +num);
  console.log(nums[0] + nums[1]);
}
