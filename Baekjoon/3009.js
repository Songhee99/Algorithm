const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let a = [];
let b = [];
let result = "";

for (const item of input) {
  let [tmpA, tmpB] = item.split(" ");
  if (a[a.length - 1] == tmpA) a.pop();
  else a.push(tmpA);
  if (b[b.length - 1] == tmpB) b.pop();
  else b.push(tmpB);
}

if (a.length == 1) result += a[0] + " ";
else result += a[1] + " ";
if (b.length == 1) result += b[0];
else result += b[1];

console.log(result);
