const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n;
const puzzles = [];
let lineCount = 0;

rl.on("line", (input) => {
  if (lineCount == 0) n = +input;
  else puzzles.push(input);
  lineCount++;
});

rl.on("close", () => {
  const result = [];

  for (let i = 1; i <= n; i++) {
    let tmpArr = new Array(n).fill(i);
    result.push(tmpArr.join(" "));
  }

  return console.log(result.join("\n"));
});
