const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [t, ...nums] = fs.readFileSync(filePath).toString().trim().split("\n");

let sumArr = [0, 1, 2, 4];

for (i = 0; i < nums.length; i++) {
  let num = +nums[i];
  for (j = 4; j < num + 1; j++) {
    sumArr[j] = sumArr[j - 1] + sumArr[j - 2] + sumArr[j - 3];
  }
  console.log(sumArr[num]);
}
