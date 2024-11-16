const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [nm, ...uvs] = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, m] = nm.split(" ").map(Number);
const graph = Array.from({ length: n + 1 }, () => []);
uvs.forEach((ele) => {
  const [u, v] = ele.split(" ").map(Number);
  graph[u].push(v);
  graph[v].push(u);
});
const visited = Array.from({ length: n + 1 }, () => false);
let count = 0;

const dfs = (i) => {
  visited[i] = true;
  graph[i].forEach((ele) => {
    if (!visited[ele]) dfs(ele);
  });
};

for (let i = 1; i <= n; i++) {
  if (!visited[i]) {
    dfs(i);
    count++;
  }
}

console.log(count);
