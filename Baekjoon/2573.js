const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [nm, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, m] = nm.split(" ").map(Number);
let result = 0;

let ice = [];
let graph = [];
for (let i = 0; i < n; i++) {
  const line = input[i].split(" ").map(Number);
  graph.push(line);
  for (let j = 1; j < m - 1; j++) {
    if (line[j] != 0) ice.push([i, j]);
  }
}

const dy = [-1, 1, 0, 0];
const dx = [0, 0, -1, 1];
const queue = [];
let head = 0;
const tmpGraph = graph.map((v) => v.slice());

const bfs = (i, j) => {
  const tmpIce = [];
  queue.push([i, j]);
  visited[i][j] = true;

  while (queue.length > head) {
    const [y, x] = queue[head++];

    for (let d = 0; d < 4; d++) {
      const ny = y + dy[d];
      const nx = x + dx[d];

      if (graph[ny][nx] == 0 && tmpGraph[y][x] > 0) tmpGraph[y][x]--;
      else if (graph[ny][nx] > 0 && !visited[ny][nx]) {
        visited[ny][nx] = true;
        queue.push([ny, nx]);
      }

      if (d == 3 && tmpGraph[y][x] > 0) tmpIce.push([y, x]);
    }
  }
  return tmpIce;
};

let visited = [];
while (ice.length > 0) {
  let tmpIce = [];
  let piece = 0;
  visited = Array.from({ length: n }, () => Array(m).fill(false));

  for (const [i, j] of ice) {
    if (!visited[i][j]) {
      piece++;
      if (piece >= 2) return console.log(result);

      tmpIce = bfs(i, j);
    }
  }
  graph = tmpGraph.map((v) => v.slice());
  ice = tmpIce;
  result++;
}

console.log(0);
