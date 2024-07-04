const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  n = +input;
  sum = 2;
  for (i = 0; i < n; i++) {
    sum += 2 ** i;
  }

  console.log(sum ** 2);
});

rl.on("close", () => {
  process.exit();
});
