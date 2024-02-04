const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [end, mid] = fs.readFileSync(filePath).toString().trim().split("\n");

let beginning = +mid + (+mid - +end);

console.log(beginning);
