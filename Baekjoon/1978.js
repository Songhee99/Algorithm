const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let numArr = input[1].split(" ");
let count = 0;

for (const item of numArr) {
  if (item == 1) continue;
  let half = Math.ceil(item / 2);
  let notSosu = 0;
  for (i = 2; i <= half; i++) {
    if (item % i == 0) {
      notSosu++;
      break;
    }
  }
  if (notSosu == 0) count++;
}

console.log(count);
