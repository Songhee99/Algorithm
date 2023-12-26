const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

let products = [];
let sum = 0;

for (let idx = 0; idx < +input.length - 2; idx++) {
  products.push(input[idx + 2].split(" ").map((num) => +num));
}

if (input[1] == input.length - 2) {
  for (let idx = 0; idx < products.length; idx++) {
    sum += products[idx][0] * products[idx][1];
  }
  if (sum == input[0]) return console.log("Yes");
  return console.log("No");
}
return console.log("No");
