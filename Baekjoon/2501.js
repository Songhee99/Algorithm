const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");
let yaksu = [];
let half = Math.ceil(input[0] / 2);

for (i = 1; i <= half; i++) {
  if (input[0] % i == 0) yaksu.push(i);
}
yaksu.push(input[0]);

if (!yaksu[input[1] - 1]) return console.log(0);
console.log(yaksu[input[1] - 1]);
