const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [d1, d2, d3] = fs.readFileSync(filePath).toString().trim().split(" ");

let a = (+d1 + +d2 - +d3) / 2;

if (a <= 0) return console.log(-1);

let b = +d1 - a;
let c = +d2 - a;

if (b > 0 && c > 0) return console.log(1 + "\n" + a.toFixed(1) + " " + b.toFixed(1) + " " + c.toFixed(1));
console.log(-1);
