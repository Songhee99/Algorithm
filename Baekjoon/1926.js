const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [nm, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, m] = nm.split(" ").map(Number);
const graph = [new Array(m + 2).fill(0)];
input.forEach((ele) => {
  const nums = ele.split(" ").map(Number);
  graph.push([0, ...nums, 0]);
});
graph.push(new Array(m + 2).fill(0));

let maxArea = 0;
let count = 0;

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

      if (graph[ny][nx] == 1) {
        queue.push([ny, nx]);
        graph[ny][nx] = 0;
        area++;
      }
    }
  }

  return area;
};

for (i = 1; i <= n; i++) {
  for (j = 1; j <= m; j++) {
    if (graph[i][j] == 1) {
      const tmpArea = bfs(i, j);
      count++;

      maxArea = Math.max(maxArea, tmpArea);
    }
  }
}

console.log(count + "\n" + maxArea);
