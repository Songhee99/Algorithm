const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, ...maps] = fs.readFileSync(filePath).toString().trim().split("\n");
const graph = [];
graph.push(new Array(+n + 2).fill(-1));
maps.forEach((ele) => {
  const nums = [-1, ...ele.split(" ").map(Number), -1];
  graph.push(nums);
});
graph.push(new Array(+n + 2).fill(-1));

const queue = [];
let head = 0;
const dy = [-1, 1, 0, 0];
const dx = [0, 0, -1, 1];
let count = 0;

const bfs = (graph, i, j, m, visited) => {
  queue.push([j, m]);

  while (queue.length > head) {
    const [y, x] = queue[head++];

    for (d = 0; d < 4; d++) {
      const ny = y + dy[d];
      const nx = x + dx[d];

      if (graph[ny][nx] > i && !visited[ny][nx]) {
        visited[ny][nx] = true;
        queue.push([ny, nx]);
      }
    }
  }
};

for (i = -1; i <= 100; i++) {
  let tmpCount = 0;
  const visited = Array.from({ length: +n + 2 }, () =>
    new Array(+n + 2).fill(false)
  );

  for (j = 1; j < +n + 1; j++) {
    for (m = 1; m < +n + 1; m++) {
      if (graph[j][m] > i && !visited[j][m]) {
        tmpCount++;
        bfs(graph, i, j, m, visited);
      }
    }
  }
  count = Math.max(count, tmpCount);
}

console.log(count);
