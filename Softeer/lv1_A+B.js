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

  for (i = 0; i < t; i++) {
    let [a, b] = arr[i].split(" ");
    result.push(`Case #${i + 1}: ${+a + +b}`);
  }

  console.log(result.join("\n"));

  process.exit();
});
