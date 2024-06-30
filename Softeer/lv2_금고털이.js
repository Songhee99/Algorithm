const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lineCount = 0;
let [w, n] = [0, 0];
let jewerlys = [];

rl.on("line", (input) => {
  if (lineCount == 0) [w, n] = input.split(" ").map(Number);
  else jewerlys.push(input.split(" ").map(Number));
  lineCount++;
});

rl.on("close", () => {
  jewerlys.sort((a, b) => a[1] - b[1]);
  result = 0;

  let [kg, price] = jewerlys.pop();
  while (w >= kg && jewerlys.length > 0) {
    result += price * kg;
    w -= kg;
    [kg, price] = jewerlys.pop();
  }

  result += w * price;

  console.log(result);

  process.exit();
});
