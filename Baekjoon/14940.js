const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [nm, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, m] = nm.split(" ").map(Number);
const result = [];

const graph = [];
let start = [0, 0];
let flag = false;

for (let i = 0; i < n; i++) {
  const line = input[i].split(" ").map(Number);
  if (!flag) {
    for (let j = 0; j < m; j++) {
      if (line[j] == 2) {
        start = [i, j];
        flag = true;
        break;
      }
    }
  }
  graph.push(line);
}

const queue = [];
let head = 0;
const dy = [-1, 1, 0, 0];
const dx = [0, 0, -1, 1];

const bfs = (i, j) => {
  queue.push([i, j]);
  graph[i][j] = 1000;

  while (queue.length > head) {
    const [y, x] = queue[head++];

    for (let d = 0; d < 4; d++) {
      const ny = y + dy[d];
      const nx = x + dx[d];

      if (ny < 0 || ny >= n || nx < 0 || nx >= m || graph[ny][nx] != 1)
        continue;
      graph[ny][nx] = graph[y][x] + 1;
      queue.push([ny, nx]);
    }
  }
};

bfs(start[0], start[1]);

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (graph[i][j] == 0) continue;
    else if (graph[i][j] == 1) graph[i][j] = -1;
    else graph[i][j] -= 1000;
  }
  result.push(graph[i].join(" "));
}

console.log(result.join("\n"));
