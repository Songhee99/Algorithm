const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n;
let arr = [];
let lineCount = 0;

rl.on("line", (input) => {
  if (lineCount == 0) n = +input;
  else arr.push(input.split(" "));
  lineCount++;
});

rl.on("close", () => {
  const result = [];

  for ([s, t] of arr) {
    const xIdx = s.search(/x/i);
    result.push(t[xIdx].toUpperCase());
  }

  console.log(result.join(""));
  process.exit();
});
