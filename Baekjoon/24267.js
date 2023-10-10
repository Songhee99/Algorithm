const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let n = fs.readFileSync(filePath).toString().trim();

console.log(`${(BigInt(n) * BigInt(n - 1) * BigInt(n - 2)) / BigInt(6)}`);
console.log(3);

// 시그마 합공식 이용
