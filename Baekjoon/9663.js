const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const n = +fs.readFileSync(filePath).toString().trim();
let graph = Array.from({ length: n }, () => 0);

const checkAnother = (graph, row) => {
  for (let j = 0; j < row; j++) {
    if (graph[row] == graph[j] || row - j == Math.abs(graph[row] - graph[j]))
      return false;
  }
  return true;
};

const locateQueen = (graph, row) => {
  let count = 0;

  if (row == n) return 1;

  for (let i = 0; i < n; i++) {
    graph[row] = i;
    if (checkAnother(graph, row)) {
      count += locateQueen(graph, row + 1);
    }
  }

  return count;
};

const result = locateQueen(graph, 0);
console.log(result);
