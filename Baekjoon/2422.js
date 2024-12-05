const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [nm, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, m] = nm.split(" ").map(Number);
const combs = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(0));
for (ele of input) {
  const [a, b] = ele.split(" ").map(Number);
  combs[a][b] = -1;
  combs[b][a] = -1;
}
let count = 0;

for (let i = 1; i <= n - 2; i++) {
  for (let j = i + 1; j <= n - 1; j++) {
    for (let k = j + 1; k <= n; k++) {
      if (combs[i][j] != -1 && combs[i][k] != -1 && combs[j][k] != -1) count++;
    }
  }
}

console.log(count);
