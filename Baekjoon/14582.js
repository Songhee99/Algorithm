const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [woolim, startlink] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" "));
let sum = 0;

for (i = 0; i < 9; i++) {
  sum += +woolim[i];
  if (sum > 0) return console.log("Yes");
  sum -= +startlink[i];
}

console.log("No");
