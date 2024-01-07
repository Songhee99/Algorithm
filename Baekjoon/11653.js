const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();
let primes = [];

for (i = 2; ; i++) {
  while (input % i == 0) {
    primes.push(i);
    input = input / i;
  }
  if (input == 1) return console.log(primes.join("\n"));
}
