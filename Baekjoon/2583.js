const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [mnk, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
const [m, n, k] = mnk.split(" ").map(Number);
const graph = Array.from({ length: m }, () => new Array(n).fill(1));
input.forEach((ele) => {
  const [x1, y1, x2, y2] = ele.split(" ").map(Number);

  for (let i = y1; i < y2; i++) {
    for (let j = x1; j < x2; j++) {
      if (graph[i][j] == 1) graph[i][j] = 0;
    }
  }
});
let result = [];

const dy = [-1, 1, 0, 0];
const dx = [0, 0, -1, 1];
const queue = [];
let head = 0;

const bfs = (i, j) => {
  queue.push([i, j]);
  graph[i][j] = 0;
  let area = 1;

  while (queue.length > head) {
    const [y, x] = queue[head++];

    for (let d = 0; d < 4; d++) {
      ny = y + dy[d];
      nx = x + dx[d];

      if (ny < 0 || nx < 0 || ny >= m || nx >= n) continue;
      if (graph[ny][nx] == 1) {
        queue.push([ny, nx]);
        graph[ny][nx] = 0;
        area++;
      }
    }
  }

  return area;
};

for (let i = 0; i < m; i++) {
  for (let j = 0; j < n; j++) {
    if (graph[i][j] == 1) {
      const area = bfs(i, j);
      result.push(area);
    }
  }
}

console.log(result.length + "\n" + result.sort((a, b) => a - b).join(" "));
