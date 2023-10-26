const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [ab, C] = fs.readFileSync(filePath).toString().trim().split("\r\n");
let AB = ab.split(" ").map((item) => +item);
let M = AB[1] + +C;

let plusH = parseInt(M / 60);
let finalM = M % 60;
let finalH = AB[0] + plusH;

if (finalH >= 24) {
  finalH -= 24;
}

console.log(finalH, finalM);
