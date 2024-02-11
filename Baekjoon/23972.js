const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [k, n] = fs.readFileSync(filePath).toString().trim().split(" ");

if (n == 1) return console.log(-1);

let x = Math.floor((+k * +n) / (+n - 1));
let xRemain = (+k * +n) % (+n - 1);

console.log(xRemain == 0 ? x + 0 : x + 1);
