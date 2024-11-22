const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
const paper = input.map((v) => v.split(" ").map(Number));
let colorsCount = [0, 0];

const checkColor = (y, x, size) => {
  const curColor = paper[y][x];
  let flag = true;

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (paper[y + i][x + j] != curColor) {
        flag = false;
        break;
      }
    }
    if (!flag) break;
  }

  if (flag) colorsCount[curColor]++;
  else {
    const tmpSize = size / 2;
    checkColor(y, x, tmpSize);
    checkColor(y + tmpSize, x, tmpSize);
    checkColor(y, x + tmpSize, tmpSize);
    checkColor(y + tmpSize, x + tmpSize, tmpSize);
  }
};

checkColor(0, 0, +n);
console.log(colorsCount.join("\n"));
