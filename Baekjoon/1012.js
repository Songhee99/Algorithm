const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [T, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
const result = [];
let idx = 0;

for (let t = 0; t < T; t++) {
  const [m, n, k] = input[idx++].split(" ").map(Number);
  const graph = Array.from({ length: n + 2 }, () => Array(m + 2).fill(0));
  const checkArr = [];
  for (let i = 0; i < k; i++) {
    const [x, y] = input[idx++].split(" ").map(Number);
    graph[y + 1][x + 1] = 1;
    checkArr.push([y + 1, x + 1]);
  }
  let count = 0;

  const queue = [];
  let head = 0;
  const dy = [-1, 1, 0, 0];
  const dx = [0, 0, -1, 1];

  const bfs = (graph, i, j) => {
    queue.push([i, j]);

    while (queue.length > head) {
      const [y, x] = queue[head++];

      for (let d = 0; d < 4; d++) {
        const ny = y + dy[d];
        const nx = x + dx[d];

        if (graph[ny][nx] == 1) {
          graph[ny][nx] = 0;
          queue.push([ny, nx]);
        }
      }
    }
  };

  checkArr.forEach((ele) => {
    const [i, j] = ele;

    if (graph[i][j] == 1) {
      bfs(graph, i, j);
      count++;
    }
  });

  result.push(count);
}

console.log(result.join("\n"));
