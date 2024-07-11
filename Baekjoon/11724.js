const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [nm, ...maps] = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, m] = nm.split(" ");
const graph = Array.from({ length: +n + 1 }, () => []);
maps.forEach((ele) => {
  const [a, b] = ele.split(" ");
  graph[+a].push(+b);
  graph[+b].push(+a);
});
const visited = Array.from({ length: +n + 1 }, () => false);
let count = 0;

const dfs = (graph, v, visited) => {
  visited[v] = true;
  graph[v].forEach((v) => {
    if (visited[v] == false) dfs(graph, v, visited);
  });
};

for (i = 1; i < visited.length; i++) {
  if (visited[i] == false) {
    count++;
    dfs(graph, i, visited);
  }
}

console.log(count);
