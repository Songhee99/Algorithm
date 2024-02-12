const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
let [a, b, c] = input.map((v) => BigInt(+v));
let sum = (a * b * c).toString();
let result = [];

for (i = 0; i < 10; i++) {
  let sumLength = sum.length;
  sum = sum.replaceAll(`${i}`, "");
  result.push(sumLength - sum.length);
}

console.log(result.join("\n"));
