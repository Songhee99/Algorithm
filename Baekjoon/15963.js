const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, m] = fs.readFileSync(filePath).toString().trim().split(" ");

console.log(n == m ? 1 : 0);
