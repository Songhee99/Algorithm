const fs = require("fs");
const filePath = process.platform == "linux" ? "/dev/stdin" : "./input.txt";
const [mnh, ...tomatoes] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const [m, n, h] = mnh.split(" ").map(Number);
let tomatoesIdx = 0;
const graph = [Array.from({ length: n + 2 }, () => new Array(m + 2).fill(-1))];
for (let z = 0; z < h; z++) {
  const floor = [Array.from({ length: m + 2 }, () => -1)];
  for (let y = 0; y < n; y++) {
    const ele = tomatoes[tomatoesIdx++].split(" ").map(Number);
    floor.push([-1, ...ele, -1]);
  }
  floor.push(Array.from({ length: m + 2 }, () => -1));
  graph.push(floor);
}
graph.push(Array.from({ length: n + 2 }, () => new Array(m + 2).fill(-1)));

const dz = [-1, 1, 0, 0, 0, 0];
const dy = [0, 0, -1, 1, 0, 0];
const dx = [0, 0, 0, 0, -1, 1];
const queue = [];
let head = 0;

const bfs = () => {
  while (queue.length > head) {
    const [z, y, x] = queue[head++];

    for (d = 0; d < 6; d++) {
      nz = z + dz[d];
      ny = y + dy[d];
      nx = x + dx[d];

      if (graph[nz][ny][nx] == 0) {
        graph[nz][ny][nx] = graph[z][y][x] + 1;
        queue.push([nz, ny, nx]);
      }
    }
  }
};

for (let k = 1; k <= h; k++) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (graph[k][i][j] == 1) queue.push([k, i, j]);
    }
  }
}

bfs();

let days = 0;
for (let k = 1; k <= h; k++) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (graph[k][i][j] == 0) return console.log(-1);

      days = Math.max(days, graph[k][i][j]);
    }
  }
}

console.log(days - 1);
