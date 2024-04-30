const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, pArr] = fs.readFileSync(filePath).toString().trim().split("\n");

const sortedPArr = pArr.split(" ").sort((a, b) => +b - +a);
const result = sortedPArr.reduce((acc, cur, idx) => +acc + +cur * (idx + 1));

console.log(result);
