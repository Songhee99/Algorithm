const fs = require("fs");
const { pid } = require("process");
const { deflate } = require("zlib");
const filePath = process.platform == "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let gradeSum = 0;
let sum = 0;

for (const item of input) {
  let [subject, grade, aveGrade] = item.split(" ");
  let aveGradeNum = 0;
  if (aveGrade == "P") continue;
  gradeSum += +grade;

  let [alp, plus] = aveGrade.split("");
  switch (alp) {
    case "A":
      aveGradeNum += +4;
      break;

    case "B":
      aveGradeNum += +3;
      break;

    case "C":
      aveGradeNum += +2;
      break;

    case "D":
      aveGradeNum += +1;
      break;

    default:
      break;
  }
  if (plus == "+") aveGradeNum += 0.5;

  sum += +grade * aveGradeNum;
}

console.log(sum / gradeSum);
