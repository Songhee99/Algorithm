const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, k] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

if (n >= k) return console.log(n - k);

const visited = new Array(100001).fill(false);
const queue = [[n, 0]];
let head = 0;
visited[n] = true;

const bfs = () => {
  while (queue.length > head) {
    const [x, count] = queue[head++];
    const dx = [x + 1, x - 1, 2 * x];

    for (let d = 0; d < 3; d++) {
      nx = dx[d];

      if (nx === k) return console.log(count + 1);
      if (nx < 0 || nx > k + 1 || visited[nx]) continue;
      else {
        visited[nx] = true;
        queue.push([nx, count + 1]);
      }
    }
  }
};

bfs();
