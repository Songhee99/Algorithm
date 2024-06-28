const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  [a, b] = input.split(" ");

  if (+a > +b) console.log("A");
  else if (+a == +b) console.log("same");
  else console.log("B");
});

rl.on("close", () => {
  process.exit();
});
