const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, ab] = fs.readFileSync(filePath).toString().trim().split("\n");

let [a, b] = ab.split(" ");
let possible = Math.floor(+a / 2) + +b;

console.log(possible > +n ? n : possible);
