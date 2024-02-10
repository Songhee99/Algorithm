const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [e, s, m] = fs.readFileSync(filePath).toString().trim().split(" ");
let count = Math.max(+e, +s, +m);

while (true) {
  if ((count - +e) % 15 == 0 && (count - +s) % 28 == 0 && (count - +m) % 19 == 0) break;
  else count++;
}

console.log(count);

// node.js로 풀면 메모리 초과 발생
