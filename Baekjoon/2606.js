const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [totalNode, edgeNum, ...edges] = fs.readFileSync(filePath).toString().trim().split("\n");
let graph = new Array(+totalNode + 1).fill().map(() => []);
let visited = new Array(+totalNode + 1).fill(0);
let count = 0;

for (i = 0; i < +edgeNum; i++) {
  let edge = edges[i].split(" ");
  let first = +edge[0];
  let last = +edge[1];

  graph[first].push(last);
  graph[last].push(first);
}

visited[1] = 1;

const dfs = (first) => {
  graph[first].forEach((ele) => {
    if (!visited[ele]) {
      visited[ele] = 1;
      count++;
      dfs(ele);
    }
  });
};

dfs(1);

console.log(count);
