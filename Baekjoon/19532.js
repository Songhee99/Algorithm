const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [a, b, c, d, e, f] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map((v, i) => +v);

let y = parseInt((d * c - a * f) / (d * b - a * e));
let x = parseInt((c - b * y) / a);
if (!x) x = parseInt((f - e * y) / d);

console.log(x + " " + y);
