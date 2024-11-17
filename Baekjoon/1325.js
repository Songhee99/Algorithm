const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [nm, ...abs] = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, m] = nm.split(" ").map(Number);
const graph = Array.from({ length: n + 1 }, () => []);
for (let ab = 0; ab < m; ab++) {
  const [a, b] = abs[ab].split(" ").map(Number);
  graph[b].push(a);
}

const visited = Array.from({ length: n + 1 }, () => false);
const totalMap = new Map();
let maxNum = 1;

const bfs = (i) => {
  const queue = [];
  let head = 0;
  let count = 1;
  queue.push(i);
  visited[i] = true;

  while (queue.length > head) {
    const tmpNum = queue[head++];

    for (let k = 0; k < graph[tmpNum].length; k++) {
      tmpEle = graph[tmpNum][k];
      if (!visited[tmpEle]) {
        queue.push(tmpEle);
        visited[tmpEle] = true;
        count++;
      }
    }
  }
  if (totalMap.has(count)) totalMap.get(count).push(i);
  else totalMap.set(count, [i]);

  visited.fill(false);
  return count;
};

for (let i = 1; i <= n; i++) {
  let tmpNum = bfs(i);
  maxNum = Math.max(maxNum, tmpNum);
}

console.log(
  totalMap
    .get(maxNum)
    .sort((a, b) => a - b)
    .join(" ")
);
