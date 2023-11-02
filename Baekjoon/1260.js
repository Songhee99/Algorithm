const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [info, ...edges] = fs.readFileSync(filePath).toString().trim().split("\n");
let [n, m, v] = info.split(" ");
let graph = new Array(+n + 1).fill().map(() => []);
let visited = new Array(+n + 1).fill(0);
let dfsArr = [];
let bfsArr = [];

const dfs = (v) => {
  if (visited[v] == true) return;

  visited[v] = 1;
  dfsArr.push(+v);

  for (let i = 0; i < graph[v].length; i++) {
    let next = graph[v][i];
    if (visited[next] == 0) dfs(next);
  }
};

const bfs = (v) => {
  let queue = [+v];

  while (queue.length > 0) {
    let cur = queue.shift();

    if (visited[cur] == 1) continue;
    visited[cur] = 1;
    bfsArr.push(cur);

    for (let i = 0; i < graph[cur].length; i++) {
      let next = graph[cur][i];
      if (visited[next] == 0) queue.push(next);
    }
  }
};

const result = (v) => {
  for (let i = 0; i < +m; i++) {
    let [from, to] = edges[i].split(" ");
    graph[from].push(+to);
    graph[to].push(+from);
  }
  graph.forEach((ele) => {
    ele.sort((a, b) => a - b);
  });

  dfs(v);
  console.log(dfsArr.join(" "));

  visited.fill(0);

  bfs(v);
  console.log(bfsArr.join(" "));
};

result(v);
