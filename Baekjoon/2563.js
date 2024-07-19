const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, ...locations] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const graph = Array.from({ length: 100 }, () => new Array(100).fill(false));
let count = 0;

locations.forEach((ele) => {
  const [x, y] = ele.split(" ").map(Number);

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (!graph[x + i][y + j]) {
        graph[x + i][y + j] = true;
        count++;
      }
    }
  }
});

console.log(count);
