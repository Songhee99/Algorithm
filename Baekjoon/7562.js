const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [T, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
let idx = 0;
const result = [];

for (let t = 0; t < +T; t++) {
  const l = +input[idx++];
  const [curY, curX] = input[idx++].split(" ").map(Number);
  const [desY, desX] = input[idx++].split(" ").map(Number);

  if (curY == desY && curX == desX) {
    result.push(0);
    continue;
  }

  const dy = [-2, -2, -1, 1, 2, 2, -1, 1];
  const dx = [-1, 1, 2, 2, -1, 1, -2, -2];
  const queue = [];
  let head = 0;

  const bfs = (i, j) => {
    queue.push([i, j, 0]);
    const visited = Array.from({ length: l }, () => new Array(l).fill(false));
    visited[i][j] = true;

    while (queue.length > head) {
      const [y, x, count] = queue[head++];

      for (let d = 0; d < 8; d++) {
        const ny = y + dy[d];
        const nx = x + dx[d];

        if (ny == desY && nx == desX) return result.push(count + 1);

        if (ny >= 0 && nx >= 0 && ny < l && nx < l && !visited[ny][nx]) {
          queue.push([ny, nx, count + 1]);
          visited[ny][nx] = true;
        }
      }
    }
  };

  bfs(curY, curX);
}

console.log(result.join("\n"));
