const fs = require("fs");
const filePath = process.platform == "linux" ? "/dev/stdin" : "./input.txt";
const [n, k] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

if (n >= k) return console.log(n - k);

const queue = [];
let head = 0;
const visited = new Array(k + 2).fill(false);

const bfs = (n) => {
  queue.push([n, 0]);
  visited[n] = true;

  while (queue.length > head) {
    const [x, time] = queue[head++];
    const dx = [2 * x, x - 1, x + 1];

    for (d = 0; d < 3; d++) {
      const nx = dx[d];

      if (nx == k) return console.log(d == 0 ? time : time + 1);

      if (nx < 1 || nx > k + 1) continue;

      if (!visited[nx]) {
        visited[nx] = true;
        if (d == 0) queue.push([nx, time]);
        else queue.push([nx, time + 1]);
      }
    }
  }
};

bfs(n);
