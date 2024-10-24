const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n;
let nArr = [];
let lineCount = 0;

rl.on("line", (input) => {
  if (lineCount == 0) n = +input;
  else nArr.push(input.split(" ").map(Number));
  lineCount++;
});

rl.on("close", () => {
  let minNum = Infinity;
  nArr.sort((a, b) => a[1] - b[1]);

  console.log(nArr[0].join(" "));
});
