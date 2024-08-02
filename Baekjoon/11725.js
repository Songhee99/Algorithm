const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, ...trees] = fs.readFileSync(filePath).toString().trim().split("\n");
const graph = new Array(+n + 1).fill().map(() => []);
trees.forEach((ele) => {
  const [a, b] = ele.split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
});
const visited = new Array(+n + 1).fill(false);
const result = new Array(+n + 1).fill(0);

const dfs = (i, visited) => {
  graph[i].forEach((ele) => {
    if (!visited[ele]) {
      result[ele] = i;
      visited[ele] = true;
      dfs(ele, visited);
    }
  });
};

visited[1] = true;
dfs(1, visited);

console.log(result.slice(2).join("\n"));
