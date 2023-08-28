const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [n, m] = input[0].split(" ");
let basket = new Array(+n).fill(0);

for (i = 1; i <= +m; i++) {
  let tryBall = input[i].split(" ");
  for (j = +tryBall[0] - 1; j < +tryBall[1]; j++) {
    basket[j] = tryBall[2];
  }
}

console.log(basket.join(" "));
