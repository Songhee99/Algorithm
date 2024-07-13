const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
const roadLens = input[0].split(" ").map(BigInt);
const oilPrices = input[1].split(" ").map(BigInt);
oilPrices.pop();
const stack = [];
let result = BigInt(0);
let lens = BigInt(0);

for (i = 0; i < +n - 1; i++) {
  if (!stack.length) {
    stack.push(oilPrices[i]);
    lens += roadLens[i];
  } else {
    if (stack[stack.length - 1] > oilPrices[i]) {
      result += stack.pop() * lens;
      stack.push(oilPrices[i]);
      lens = roadLens[i];
    } else lens += roadLens[i];
  }
}

result += stack.pop() * lens;
console.log(result.toString());
