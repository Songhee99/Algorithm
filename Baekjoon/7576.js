const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [mn, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
const [m, n] = mn.split(" ").map(Number);
let result = 0;

const dy = [-1, 1, 0, 0];
const dx = [0, 0, -1, 1];
const queue = [];
let head = 0;

const graph = [new Array(m + 2).fill(-1)];
input.forEach((ele, row) => {
  const nums = ele.split(" ").map(Number);
  nums.forEach((ele2, col) => {
    if (ele2 == 1) queue.push([row + 1, col + 1]);
  });
  graph.push([-1, ...nums, -1]);
});
graph.push(new Array(m + 2).fill(-1));

const bfs = () => {
  while (queue.length > head) {
    const [y, x] = queue[head++];

    for (let d = 0; d < 4; d++) {
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

for (row of graph) {
  for (col of row) {
    if (col == 0) return console.log(-1);
    result = Math.max(result, col);
  }
}

return console.log(result - 1);
