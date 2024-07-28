const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const cheolsu = [];
for (let i = 0; i < 5; i++) {
  cheolsu.push(...input[i].split(" ").map(Number));
}
const mc = [];
for (let i = 5; i < 10; i++) {
  mc.push(...input[i].split(" ").map(Number));
}
let count = 0;

const checkRow = Array.from({ length: 5 }, () => []);
const checkCol = Array.from({ length: 5 }, () => []);
const checkLeftDiag = [];
const checkRigDiag = [];

for (i = 0; i < 25; i++) {
  const numIdx = cheolsu.indexOf(mc[i]);
  const rowIdx = parseInt(numIdx / 5);
  const colIdx = numIdx % 5;

  checkRow[rowIdx].push(0);
  if (checkRow[rowIdx].length == 5) count++;

  checkCol[colIdx].push(0);
  if (checkCol[colIdx].length == 5) count++;

  if (numIdx % 6 == 0) {
    checkLeftDiag.push(0);
    if (checkLeftDiag.length == 5) count++;
  }

  if (
    numIdx % 4 == 0 &&
    Math.floor(numIdx / 4) > 0 &&
    Math.floor(numIdx / 4) < 6
  ) {
    checkRigDiag.push(0);
    if (checkRigDiag.length == 5) count++;
  }

  if (count >= 3) return console.log(i + 1);
}
