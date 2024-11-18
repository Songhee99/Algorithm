const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [nm, rcd, ...states] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const [n, m] = nm.split(" ").map(Number);
let [r, c, d] = rcd.split(" ").map(Number);
const graph = [];
for (let g = 0; g < n; g++) {
  graph.push(states[g].split(" ").map(Number));
}
let count = 0;

const clean = (i, j) => {
  graph[i][j] = -1;
  count++;
};

const dy = [-1, 0, 1, 0];
const dx = [0, 1, 0, -1];

const move = (i, j) => {
  if (graph[i][j] == 0) clean(i, j);

  let allClean = true;
  for (let a = 0; a < 4; a++) {
    d = (d + 3) % 4;
    ni = i + dy[d];
    nj = j + dx[d];

    if (graph[ni][nj] == 0) {
      clean(ni, nj);
      allClean = false;
      break;
    }
  }

  if (allClean) {
    nd = (d + 2) % 4;
    ni = i + dy[nd];
    nj = j + dx[nd];

    if (graph[ni][nj] == 1) {
      i = -1;
      j = -1;
      return [i, j];
    }
  }

  i = ni;
  j = nj;
  return [i, j];
};

while (1) {
  let [nr, nc] = move(r, c, d);

  if (nr == -1 && nc == -1) {
    return console.log(count);
  } else {
    r = nr;
    c = nc;
  }
}
