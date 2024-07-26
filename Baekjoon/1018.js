const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [nm, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, m] = nm.split(" ").map(Number);
const boards = input.map((v) => v.split(""));
let result = Infinity;

const checkColor = (boards, color, y, x) => {
  let count = 0;

  for (let i = 0; i < 8; i++) {
    if (i % 2 == 0) {
      for (let j = 0; j < 8; j++) {
        if (j % 2 == 0 && boards[y + i][x + j] != color) count++;
        else if (j % 2 != 0 && boards[y + i][x + j] == color) count++;
      }
    } else {
      for (let j = 0; j < 8; j++) {
        if (j % 2 == 0 && boards[y + i][x + j] == color) count++;
        else if (j % 2 != 0 && boards[y + i][x + j] != color) count++;
      }
    }
  }

  return count;
};

for (let i = 0; i < n - 7; i++) {
  for (j = 0; j < m - 7; j++) {
    const black = checkColor(boards, "B", i, j);
    const white = checkColor(boards, "W", i, j);
    result = Math.min(result, black, white);
  }
}

console.log(result);
