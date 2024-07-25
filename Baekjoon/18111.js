const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [nmb, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, m, b] = nmb.split(" ").map(Number);
const graph = [];
input.forEach((ele) => {
  const grounds = ele.split(" ").map(Number);
  graph.push(grounds);
});
let maxHeight = -1;
let minHeight = 257;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (graph[i][j] > maxHeight) maxHeight = graph[i][j];
    if (graph[i][j] < minHeight) minHeight = graph[i][j];
  }
}

let count = Infinity;
let finalHeight = -1;

for (let h = minHeight; h <= maxHeight; h++) {
  let tmpCount = 0;
  let item = b;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      const difference = graph[i][j] - h;

      if (difference > 0) {
        tmpCount += difference * 2;
        item += difference;
      } else {
        tmpCount -= difference;
        item += difference;
      }
    }
  }

  if (item >= 0 && tmpCount <= count) {
    count = tmpCount;
    finalHeight = h;
  }
}

console.log(count, finalHeight);
