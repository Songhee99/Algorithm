const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [m, n] = fs.readFileSync(filePath).toString().trim().split("\n");
let sum = 0;
let min;

for (i = +m; i <= +n; i++) {
  if (i == 1) continue;
  let half = parseInt(i / 2);
  let notSosu = 0;
  for (j = 2; j <= half; j++) {
    if (i % j == 0) {
      notSosu++;
      break;
    }
  }
  if (notSosu == 0) {
    sum += i;
    if (min > i || min == undefined) min = i;
  }
}

if (sum == 0) return console.log(-1);
console.log(sum);
console.log(min);
