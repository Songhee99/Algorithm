const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const arr = [];

rl.on("line", (input) => {
  arr.push(input);
});

rl.on("close", () => {
  const [m, n, k] = arr[0].split(" ");
  const answer = arr[1].split(" ").join("");
  const person = arr[2].split(" ").join("");

  console.log(person.includes(answer) ? "secret" : "normal");

  process.exit();
});
