const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [x, y, w, h] = fs.readFileSync(filePath).toString().trim().split(" ");

if (x > Math.abs(x - w)) x = Math.abs(x - w);
if (y > Math.abs(y - h)) y = Math.abs(y - h);

console.log(x - y > 0 ? y : x);
