const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, ...words] = fs.readFileSync(filePath).toString().trim().split("\n");
let count = 0;

words.forEach((ele) => {
  if (ele.length % 2 != 0) return;
  let alphabet = ele.split("");
  let stack = [];

  while (alphabet.length > 0) {
    let lastAlphabet = alphabet.pop();

    if (stack[stack.length - 1] == lastAlphabet) stack.pop();
    else stack.push(lastAlphabet);
  }

  if (stack.length == 0) count++;
});

console.log(count);
