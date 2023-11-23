const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [N, F] = fs.readFileSync(filePath).toString().trim().split("\n");
let result = String(0);

N = Math.floor(N / 100) * 100;
if (N % F > 0) result = String(F - (N % F));
console.log(result.padStart(2, "0"));
