const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [rcn, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
const [r, c, n] = rcn.split(" ").map(Number);

const full = Array.from({ length: r }, () => new Array(c).fill("O"));
let initial = input.map((v) => v.split(""));

if (n == 1) return console.log(input.join("\n"));
else if (n % 2 == 0) return console.log(full.map((v) => v.join("")).join("\n"));

const dy = [-1, 1, 0, 0];
const dx = [0, 0, -1, 1];

const bfs = (curBombs) => {
  const final = full.map((v) => v.slice());

  for (let y = 0; y < r; y++) {
    for (let x = 0; x < c; x++) {
      if (curBombs[y][x] == "O") {
        final[y][x] = ".";

        for (let d = 0; d < 4; d++) {
          const ny = y + dy[d];
          const nx = x + dx[d];

          if (ny < 0 || ny >= r || nx < 0 || nx >= c) continue;
          final[ny][nx] = ".";
        }
      }
    }
  }
  return final;
};

const threeSec = bfs(initial);
const fiveSec = bfs(threeSec);

if (n % 4 == 3) console.log(threeSec.map((v) => v.join("")).join("\n"));
else console.log(fiveSec.map((v) => v.join("")).join("\n"));
