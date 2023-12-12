const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  input = input.map((item) => +item);
  solution(input);
  process.exit();
});

function solution(input) {
  if (+input[0] > 0) {
    if (+input[1] > 0) return console.log("1");
    return console.log("4");
  }
  if (+input[1] > 0) return console.log("2");
  return console.log("3");
}
