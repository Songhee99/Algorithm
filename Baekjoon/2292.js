const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();
let standard = 1;
let count = 1;

while (standard < +input) {
  standard += 6 * count;
  count++;
}

console.log(count);
