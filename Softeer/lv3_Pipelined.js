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
  else arr = input.split(" ").map(Number);
  lineCount++;
});

rl.on("close", () => {
  arr.sort((a, b) => b - a);

  console.log(arr[0] + (arr.length - 1));
});
