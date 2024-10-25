const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n;
let lineCount = 0;
let locations;

rl.on("line", (input) => {
  if (lineCount == 0) n = +input;
  else locations = input.split(" ").map(Number);
  lineCount++;
});

rl.on("close", () => {
  let minDist = Infinity;
  let count = 0;

  for (let i = 0; i < n - 1; i++) {
    let dist = locations[i + 1] - locations[i];

    if (dist < minDist) {
      minDist = dist;
      count = 1;
    } else if (dist == minDist) count++;
  }

  console.log(count);
  process.exit();
});
