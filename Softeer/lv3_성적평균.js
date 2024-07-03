const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let [n, k] = [0, 0];
let sArr;
let ranges = [];
let lineCount = 0;

rl.on("line", (input) => {
  if (lineCount == 0) [n, k] = input.split(" ").map(Number);
  else if (lineCount == 1) sArr = input.split(" ").map(Number);
  else ranges.push(input.split(" ").map(Number));
  lineCount++;
});

rl.on("close", () => {
  const result = [];
  ranges.forEach((nums) => {
    const [a, b] = nums;
    const count = b - a + 1;
    const newRangeSum = sArr.slice(a - 1, b).reduce((acc, cur) => acc + cur);
    const aver = (newRangeSum / count).toFixed(2);
    result.push(aver);
  });

  console.log(result.join("\n"));

  process.exit();
});
