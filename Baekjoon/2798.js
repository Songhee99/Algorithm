const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [nAndm, nums] = fs.readFileSync(filePath).toString().trim().split("\n");
let [n, m] = nAndm.split(" ");
let finalSum = 0;
nums = nums.split(" ");

for (i = 0; i < nums.length - 2; i++) {
  for (j = i + 1; j < nums.length - 1; j++) {
    for (k = j + 1; k < nums.length; k++) {
      let sum = +nums[i] + +nums[j] + +nums[k];
      if (sum <= +m && finalSum < sum) finalSum = sum;
    }
  }
}

console.log(finalSum);
