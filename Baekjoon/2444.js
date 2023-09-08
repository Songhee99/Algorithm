const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

for (i = input; i > 1; i--) {
  console.log(" ".repeat(i - 1) + "*".repeat(2 * (input - i) + 1));
}

for (i = 0; i < input; i++) {
  console.log(" ".repeat(i) + "*".repeat(2 * (input - i) - 1));
}
