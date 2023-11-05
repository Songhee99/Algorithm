const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

for (let idx = 0; idx < +input[0]; idx++) {
  let grade = input[idx + 1].split("");
  let count = 0;
  let score = 0;

  for (let i = 0; i < grade.length; ) {
    while (grade[i] == "O") {
      count++;
      i++;
    }
    for (let j = 0; j < count; j++) {
      score += j + 1;
    }
    while (grade[i] == "X") {
      count = 0;
      i++;
    }
  }
  console.log(score);
}
