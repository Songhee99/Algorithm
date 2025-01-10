const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const board = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" "));

const exceptionSet = new Set();
const dy = [1, 1, 0, 1]; // 세로, 대각선, 가로
const dx = [0, 1, 1, -1];

for (let i = 0; i < 19; i++) {
  for (let j = 0; j < 19; j++) {
    if (board[i][j] != 0) {
      const color = board[i][j];

      for (let d = 0; d < 4; d++) {
        if (exceptionSet.has([i, j, d].join(","))) continue;

        let count = 1;
        let y = i;
        let x = j;

        while (true) {
          const ny = y + dy[d];
          const nx = x + dx[d];

          if (ny >= 19 || nx < 0 || nx >= 19 || board[ny][nx] != color) break;
          y = ny;
          x = nx;
          count++;
        }

        if (count == 5) {
          if (d == 3) return console.log(color + "\n" + `${y + 1} ${x + 1}`);
          else return console.log(color + "\n" + `${i + 1} ${j + 1}`);
        }
        if (count > 5) {
          y = i;
          x = j;

          for (let c = count; c >= 5; c--) {
            exceptionSet.add([y, x, d].join(","));
            y += dy[d];
            x += dx[d];
          }
        }
      }
    }
  }
}

console.log(0);
