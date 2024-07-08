const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const result = [];
let idx = 0;

const dy = [-1, 1, 0, 0, -1, -1, 1, 1];
const dx = [0, 0, -1, 1, -1, 1, -1, 1];

const dfs = (j, k, graph) => {
  const stack = [[j, k]];
  graph[j][k] = 0;

  while (stack.length) {
    const [y, x] = stack.pop();

    for (d = 0; d < 8; d++) {
      const ny = y + dy[d];
      const nx = x + dx[d];

      if (graph[ny][nx] == 1) {
        graph[ny][nx] = 0;
        stack.push([ny, nx]);
      }
    }
  }
};

while (true) {
  const [w, h] = input[idx++].split(" ").map(Number);
  if (w == 0 && h == 0) break;

  const graph = [Array.from({ length: w + 2 }, () => 0)];
  for (i = 0; i < h; i++) {
    const line = input[idx++].split(" ").map(Number);
    graph.push([0, ...line, 0]);
  }
  graph.push(Array.from({ length: w + 2 }, () => 0));

  let count = 0;

  for (j = 1; j < h + 2; j++) {
    for (k = 1; k < w + 2; k++) {
      if (graph[j][k] == 1) {
        dfs(j, k, graph);
        count++;
      }
    }
  }

  result.push(count);
}

console.log(result.join("\n"));
