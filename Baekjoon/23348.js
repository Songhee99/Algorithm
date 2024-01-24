const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [skills, n, ...teams] = fs.readFileSync(filePath).toString().trim().split("\n");
let skillsArr = skills.split(" ");
let maxSum = 0;

for (i = 0; i < +n; i++) {
  let sum = 0;
  for (j = 0; j < 3; j++) {
    let score = teams[3 * i + j].split(" ");

    sum = score.reduce((acc, cur, idx) => {
      return +acc + +cur * +skillsArr[idx];
    }, sum);
  }
  maxSum = Math.max(maxSum, sum);
}

console.log(maxSum);
