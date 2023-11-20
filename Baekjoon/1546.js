const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let gradeArr = input[1].split(" ");
let M = Math.max(...gradeArr);
let newGrade = 0;

gradeArr.forEach((grade) => {
  newGrade += (grade / M) * 100;
});

console.log(newGrade / +input[0]);
