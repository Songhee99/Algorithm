const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [nlr, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, l, r] = nlr.split(" ").map(Number);
let result = 0;

let country = [];
for (let i = 0; i < n; i++) {
  country.push(input[i].split(" ").map(Number));
}

let visited = [];
const dy = [-1, 1, 0, 0];
const dx = [0, 0, -1, 1];
const queue = [];
let head = 0;
const team = [];
let start = 0;

const bfs = (i, j) => {
  queue.push([i, j]);
  team.push([i, j]);
  visited[i][j] = true;
  let sum = country[i][j];
  let count = 1;

  while (queue.length > head) {
    const [y, x] = queue[head++];
    const num = country[y][x];

    for (let d = 0; d < 4; d++) {
      const ny = y + dy[d];
      const nx = x + dx[d];

      if (ny < 0 || ny >= n || nx < 0 || nx >= n || visited[ny][nx]) continue;

      if (
        Math.abs(country[ny][nx] - num) >= l &&
        Math.abs(country[ny][nx] - num) <= r
      ) {
        visited[ny][nx] = true;
        queue.push([ny, nx]);
        team.push([ny, nx]);
        sum += country[ny][nx];
        count++;
      }
    }
  }

  let avg = Math.floor(sum / count);

  if (count > 1) {
    while (team.length > start) {
      const [y, x] = team[start++];
      country[y][x] = avg;
    }
    return true;
  } else {
    start++;
    return false;
  }
};

while (true) {
  visited = Array.from({ length: n }, () => new Array(n).fill(false));
  let moved = false;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (!visited[i][j]) {
        const flag = bfs(i, j);
        if (flag) moved = true;
      }
    }
  }

  if (!moved) break;
  result++;
}

console.log(result);
