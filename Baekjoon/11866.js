const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, k] = fs.readFileSync(filePath).toString().trim().split(" ");
let result = [];
let queue = [];
let idx = 0;

for (i = 1; i < +n + 1; i++) {
  queue.push(i);
}

while (result.length < +n) {
  for (j = 0; j < +k - 1; j++) {
    queue.push(queue[idx++]);
  }
  result.push(queue[idx++]);
}

console.log("<" + result.join(", ") + ">");
