const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [f, s, g, u, d] = fs.readFileSync(filePath).toString().trim().split(" ");

if (s == g) return console.log(0);

const queue = [];
let head = 0;

const bfs = (f, s, g, u, d) => {
  queue.push([s, 0]);
  const dy = [u, -1 * d];
  const visited = new Array(f + 1).fill(false);
  visited[0] = true;
  visited[s] = true;

  while (queue.length > head) {
    const [num, count] = queue[head++];

    for (d = 0; d < 2; d++) {
      const ny = num + dy[d];
      if (ny == g) return console.log(count + 1);

      if (ny > 0 && ny <= f && !visited[ny]) {
        queue.push([ny, count + 1]);
        visited[ny] = true;
      }
    }
  }
  return console.log("use the stairs");
};

bfs(+f, +s, +g, +u, +d);
