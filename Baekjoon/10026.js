const fs = require("fs");
const filePath = process.platform == "linux" ? "/dev/stdin" : "./input.txt";
const [n, ...colors] = fs.readFileSync(filePath).toString().trim().split("\n");
const graph = [];
colors.forEach((ele) => {
  const rgbs = ele.split("");
  graph.push(rgbs);
});

let threeColors = 0;
let twoColors = 0;

const dy = [-1, 1, 0, 0];
const dx = [0, 0, -1, 1];
const queue = [];
let head = 0;

const threeBfs = (i, j) => {
  const tmpColor = graph[i][j];
  queue.push([i, j]);
  graph[i][j] = "C";

  while (queue.length > head) {
    const [y, x] = queue[head++];

    for (d = 0; d < 4; d++) {
      const ny = y + dy[d];
      const nx = x + dx[d];

      if (ny < 0 || nx < 0 || ny >= +n || nx >= +n) continue;

      if (graph[ny][nx] == tmpColor) {
        queue.push([ny, nx]);
        graph[ny][nx] = "C";
      }
    }
  }
};

const bfs = (i, j) => {
  const tmpColor = graph[i][j];
  queue.push([i, j]);
  graph[i][j] = 0;

  while (queue.length > head) {
    const [y, x] = queue[head++];

    for (d = 0; d < 4; d++) {
      const ny = y + dy[d];
      const nx = x + dx[d];

      if (ny < 0 || nx < 0 || ny >= +n || nx >= +n) continue;

      if (graph[ny][nx] == tmpColor) {
        queue.push([ny, nx]);
        graph[ny][nx] = 0;
      }
    }
  }
};

for (let i = 0; i < +n; i++) {
  for (let j = 0; j < +n; j++) {
    if (graph[i][j] == "R" || graph[i][j] == "G") {
      threeBfs(i, j);
      threeColors++;
    }
  }
}

for (let i = 0; i < +n; i++) {
  for (let j = 0; j < +n; j++) {
    if (graph[i][j] != 0) {
      if (graph[i][j] == "B") threeColors++;

      bfs(i, j);
      twoColors++;
    }
  }
}

console.log(threeColors, twoColors);
