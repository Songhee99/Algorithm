const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [nm, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, m] = nm.split(" ").map(Number);

if (n < 5 || m < 4) return console.log(0);

const graph = Array.from({ length: n }, () => []);
for (const ele of input) {
  const [a, b] = ele.split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

const dfs = (i, num) => {
  if (num == 4) return (possibility = true);

  visited[i] = true;

  for (const ele of graph[i]) {
    if (!visited[ele]) {
      dfs(ele, num + 1);
      if (possibility) return;
    }
  }

  visited[i] = false;
};

const visited = Array.from({ length: n }, () => false);
let possibility = false;

for (let i = 0; i < n; i++) {
  dfs(i, 0);
  if (possibility) return console.log(1);
}

console.log(0);
