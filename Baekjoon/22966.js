const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, ...titles] = fs.readFileSync(filePath).toString().trim().split("\n");
let sortedTitles = titles.map((v) => v.split(" ")).sort((a, b) => +a[1] - +b[1]);

console.log(sortedTitles[0][0]);
