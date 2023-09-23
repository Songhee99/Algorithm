const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input.splice(-1);

for (const item of input) {
  let half = Math.ceil(item / 2);
  let yaksuSum = 0;
  let yaksuArr = [];
  for (i = 1; i <= half; i++) {
    if (item % i == 0) {
      yaksuArr.push(i);
      yaksuSum += i;
    }
  }
  if (item == yaksuSum) console.log(item + " = " + yaksuArr.join(" + "));
  else console.log(item + " is NOT perfect.");
}
