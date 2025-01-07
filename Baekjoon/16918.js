const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [rcn, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
const [r, c, n] = rcn.split(" ").map(Number);

const fullBombs = Array.from({ length: r }, () => new Array(c).fill("O"));
let prevBombs = input.map((v) => v.split(""));

if (n == 1) return console.log(input.join("\n"));
else if (n % 2 == 0)
  return console.log(fullBombs.map((v) => v.join("")).join("\n"));

const dy = [-1, 1, 0, 0];
const dx = [0, 0, -1, 1];
const queue = [];
let head = 0;

const bfs = (locations) => {
  const curBombs = fullBombs.map((v) => v.slice());
  queue.push(...locations);

  while (queue.length > head) {
    const [y, x] = queue[head++];
    curBombs[y][x] = ".";

    for (let d = 0; d < 4; d++) {
      const ny = y + dy[d];
      const nx = x + dx[d];
      if (ny < 0 || ny >= r || nx < 0 || nx >= c) continue;
      curBombs[ny][nx] = ".";
    }
  }
  return curBombs;
};

for (let k = 3; k <= n; k += 2) {
  // n번까지 반복
  const locations = [];

  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (prevBombs[i][j] == "O") locations.push([i, j]);
    }
  }
  prevBombs = bfs(locations);
}

console.log(prevBombs.map((v) => v.join("")).join("\n"));
