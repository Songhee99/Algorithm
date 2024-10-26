const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let [n, m] = [0, 0];
let graph = [];
let [l1, r1] = [0, 0];
let [l2, r2] = [0, 0];
let lineCount = 0;

rl.on("line", (input) => {
  if (lineCount == 0) [n, m] = input.split(" ").map(Number);
  else if (lineCount <= n) graph.push(input.split(" ").map(Number));
  else if (lineCount == n + 1) [l1, r1] = input.split(" ").map(Number);
  else [l2, r2] = input.split(" ").map(Number);
  lineCount++;
});

rl.on("close", () => {
  let count = 0;

  const attack = (l, r) => {
    for (let i = l - 1; i < r; i++) {
      let idx = graph[i].indexOf(1);
      if (idx != -1) graph[i][idx] = 0;
    }
  };

  attack(l1, r1);
  attack(l2, r2);

  for (let j = 0; j < n; j++) {
    count += graph[j].filter((ele) => ele == 1).length;
  }

  console.log(count);
});
