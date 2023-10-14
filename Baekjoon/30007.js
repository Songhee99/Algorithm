const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

for (i = 1; i <= +input[0]; i++) {
  let [a, b, x] = input[i].split(" ");
  console.log((+x - 1) * +a + +b);
}
