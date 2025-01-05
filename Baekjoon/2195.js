const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [s, p] = fs.readFileSync(filePath).toString().trim().split("\n");

let count = 1;
let curIdx = 0;

for (let i = 0; i < p.length; i++) {
  if (s.includes(p.slice(curIdx, i + 1))) continue;

  curIdx = i;
  count++;
}

return console.log(count);
