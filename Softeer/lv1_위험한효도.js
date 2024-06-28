const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  [a, b, d] = input.split(" ");
});

rl.on("close", () => {
  let firstFront = +d % +a == 0 ? parseInt(+d / +a) - 1 : parseInt(+d / +a);
  let firstFrontTime = firstFront * +b;
  let secondFront = +d % +b == 0 ? parseInt(+d / +b) - 1 : parseInt(+d / +b);
  let secondFrontTime = secondFront * +a;

  console.log(2 * +d + firstFrontTime + secondFrontTime);

  process.exit();
});
