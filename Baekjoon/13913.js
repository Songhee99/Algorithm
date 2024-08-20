const fs = require("fs");
const filePath = process.platform == "linux" ? "/dev/stdin" : "./input.txt";
const [n, k] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

if (n == k) return console.log(0 + "\n" + k);
if (n > k) {
  const nums = [];
  for (let i = n; i >= k; i--) {
    nums.push(i);
  }
  return console.log(n - k + "\n" + nums.join(" "));
}

const queue = [];
let head = 0;
const visited = new Array(k + 2).fill(false);
const prevArr = new Array(k + 2).fill(-1);

const bfs = (n) => {
  queue.push(n);
  visited[n] = true;

  while (queue.length > head) {
    const x = queue[head++];
    const dx = [x + 1, x - 1, 2 * x];

    for (let d = 0; d < 3; d++) {
      const nx = dx[d];

      if (nx == k) {
        const path = [];
        for (let i = x; i != -1; i = prevArr[i]) {
          path.push(i);
        }

        path.reverse().push(k);
        return console.log(path.length - 1 + "\n" + path.join(" "));
      }

      if (nx < 1 || nx > k + 1) continue;

      if (!visited[nx]) {
        visited[nx] = true;
        prevArr[nx] = x;
        queue.push(nx);
      }
    }
  }
};

bfs(n);
