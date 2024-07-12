const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
const graph = Array.from({ length: +n + 1 }, () => []);
let count = 0;
let tmpCount = 0;

input.forEach((line, lineIdx) => {
  line.split("").forEach((ele, eleIdx) => {
    if (ele == "Y") graph[lineIdx + 1].push(eleIdx + 1);
  });
});

const dfs = (graph, v, visited) => {
  graph[v].forEach((ele) => {
    if (!visited[ele]) {
      visited[ele] = true;
      tmpCount++;
    }
  });
};

graph.forEach((nums, idx) => {
  const visited = Array.from({ length: +n + 1 }, () => false);
  visited[idx] = true;
  tmpCount = nums.length;
  nums.forEach((v) => {
    visited[v] = true;
  });

  nums.forEach((v) => {
    dfs(graph, v, visited);
  });

  count = Math.max(count, tmpCount);
});

console.log(count);
