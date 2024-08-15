const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [mn, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
const [m, n] = mn.split(" ").map(Number);
const graph = [];
graph.push(new Array(m + 2).fill(-1));
input.forEach((ele) => {
  const tomatoes = [-1, ...ele.split(" ").map(Number), -1];
  graph.push(tomatoes);
});
graph.push(new Array(m + 2).fill(-1));

const dy = [-1, 1, 0, 0];
const dx = [0, 0, -1, 1];
const queue = [];
let head = 0;

for (i = 1; i <= n; i++) {
  for (j = 1; j <= m; j++) {
    if (graph[i][j] == 1) queue.push([i, j]);
  }
}

const bfs = () => {
  while (queue.length > head) {
    const [y, x] = queue[head++];

    for (d = 0; d < 4; d++) {
      const ny = y + dy[d];
      const nx = x + dx[d];

      if (graph[ny][nx] == 0) {
        graph[ny][nx] = graph[y][x] + 1;
        queue.push([ny, nx]);
      }
    }
  }
};

bfs();

let days = 0;
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= m; j++) {
    if (graph[i][j] == 0) return console.log(-1);

    days = Math.max(days, graph[i][j]);
  }
}

console.log(days - 1);
