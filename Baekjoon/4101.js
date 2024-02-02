const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const cases = fs.readFileSync(filePath).toString().trim().split("\n");
let result = [];

for (i = 0; i < cases.length - 1; i++) {
  let [prev, next] = cases[i].split(" ");
  +prev - +next > 0 ? result.push("Yes") : result.push("No");
}

console.log(result.join("\n"));
