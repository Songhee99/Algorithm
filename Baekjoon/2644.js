const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, ab, m, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const [a, b] = ab.split(" ").map(Number);
const graph = Array.from({ length: +n + 1 }, () => []);
for (relation of input) {
  const [x, y] = relation.split(" ").map(Number);
  graph[x].push(y);
  graph[y].push(x);
}

const visited = new Array(+n + 1).fill(-1);

const dfs = (i, count) => {
  visited[i] = count;

  for (ele of graph[i]) {
    if (ele == b) return (visited[b] = count + 1);
    if (visited[ele] == -1) dfs(ele, count + 1);
  }
};

dfs(a, 0);
console.log(visited[b]);
