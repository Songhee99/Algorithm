const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let [k, n] = [0, 0];
const lans = [];
let lineCount = 0;

rl.on("line", (input) => {
  if (lineCount == 0) [k, n] = input.split(" ").map(Number);
  else lans.push(+input);
  lineCount++;
});

rl.on("close", () => {
  let start = 1;
  let end = Math.max(...lans);

  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    let count = 0;

    lans.forEach((lan) => {
      count += parseInt(lan / mid);
    });

    if (count < n) end = mid - 1;
    else start = mid + 1;
  }

  console.log(end);

  process.exit();
});
