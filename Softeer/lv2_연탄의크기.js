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
  let result = 0;

  if (arr.length == 1) return console.log(1);

  for (let i = 2; i < 101; i++) {
    let maxCount = 0;

    for (const num of arr) {
      if (num > 1 && num % i == 0) maxCount++;
    }

    result = Math.max(result, maxCount);
  }

  console.log(result);
});
