const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [xyr1, xyr2] = fs.readFileSync(filePath).toString().trim().split("\n");
const [x1, y1, r1] = xyr1.split(" ").map(Number);
const [x2, y2, r2] = xyr2.split(" ").map(Number);

const distance = (y1 - y2) ** 2 + (x1 - x2) ** 2;

console.log(distance < (r1 + r2) ** 2 ? "YES" : "NO");
