const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map((item) => +item);

if (input[0] == input[1]) {
  if (input[1] == input[2]) return console.log(10000 + input[0] * 1000);
  return console.log(1000 + input[0] * 100);
}
if (input[0] != input[1]) {
  if (input[0] == input[2] || input[1] == input[2]) return console.log(1000 + input[2] * 100);
  return console.log(Math.max(...input) * 100);
}
