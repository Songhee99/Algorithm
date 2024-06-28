const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

arr = [];

rl.on("line", (input) => {
  arr.push(input);
});

rl.on("close", () => {
  t = arr.shift();
  result = [];

  arr.forEach((num) => {
    plusNum = parseInt(num / 5);
    lineNum = num % 5;
    result.push("++++ ".repeat(plusNum) + "|".repeat(lineNum));
  });

  console.log(result.join("\n"));

  process.exit();
});
