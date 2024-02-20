const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const arr = fs.readFileSync(filePath).toString().trim().split(" ");
let sortArr = [...arr].sort((a, b) => +a - +b);

console.log(arr.join("") == sortArr.join("") ? "Good" : "Bad");
