const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

for (let i = 0; i < +input[0]; i++) {
  let grade = input[i + 1].split(" ").map((num) => +num);
  let average = (grade.reduce((acc, cur) => acc + cur) - grade[0]) / grade[0];
  let aboveAverage = 0;

  for (j = 0; j < grade[0]; j++) {
    if (grade[j + 1] > average) aboveAverage++;
  }

  let percent = Math.round((aboveAverage / grade[0]) * 100 * 1000) / 1000;
  console.log(percent.toFixed(3) + "%");
}
