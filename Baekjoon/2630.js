const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
const graph = [];
input.forEach((ele) => {
  graph.push(ele.split(" "));
});
let white = 0;
let blue = 0;

const checkColor = (y, x, size) => {
  const curColor = graph[y][x];
  let same = true;

  for (i = y; i < y + size; i++) {
    for (j = x; j < x + size; j++) {
      if (graph[i][j] != curColor) {
        same = false;
        break;
      }
    }
    if (!same) break;
  }

  if (same) {
    if (curColor == "0") white++;
    else blue++;
  } else {
    const newSize = size / 2;
    checkColor(y, x, newSize);
    checkColor(y + newSize, x, newSize);
    checkColor(y, x + newSize, newSize);
    checkColor(y + newSize, x + newSize, newSize);
  }
};

checkColor(0, 0, n);

console.log(white + "\n" + blue);
