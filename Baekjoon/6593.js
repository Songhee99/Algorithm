const fs = require("fs");
const filePath = process.platform == "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const result = [];
let idx = 0;

while (true) {
  const [l, r, c] = input[idx++].split(" ").map(Number);
  if (l == 0 && r == 0 && c == 0) break;

  const graph = Array.from({ length: l }, () => []);
  let start = [];
  let end = [];

  for (let i = 0; i < l; i++) {
    for (let j = 0; j < r; j++) {
      const line = input[idx++].split("");
      graph[i].push(line);

      const xE = line.indexOf("E");
      const xS = line.indexOf("S");
      if (xS >= 0) start = [i, j, xS];
      if (xE >= 0) end = [i, j, xE];
    }
    idx++;
  }

  const dz = [-1, 1, 0, 0, 0, 0];
  const dy = [0, 0, -1, 1, 0, 0];
  const dx = [0, 0, 0, 0, -1, 1];
  const queue = [];
  let head = 0;

  const bfs = (start) => {
    queue.push([...start, 0]);

    while (queue.length > head) {
      const [z, y, x, count] = queue[head++];

      for (let d = 0; d < 6; d++) {
        const nz = z + dz[d];
        const ny = y + dy[d];
        const nx = x + dx[d];

        if (nz < 0 || ny < 0 || nx < 0 || nz >= l || ny >= r || nx >= c)
          continue;

        if (graph[nz][ny][nx] == ".") {
          graph[nz][ny][nx] = "#";
          queue.push([nz, ny, nx, count + 1]);
        } else if (graph[nz][ny][nx] == "E")
          return result.push(`Escaped in ${count + 1} minute(s).`);
      }
    }

    return result.push("Trapped!");
  };

  bfs(start);
}

console.log(result.join("\n"));
