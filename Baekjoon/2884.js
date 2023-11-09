const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").join().split(" ");
let H = +input[0];
let M = +input[1] - 45;

if (M >= 0) return console.log(H, M);
if (H - 1 >= 0) return console.log(H - 1, M + 60);
return console.log(23, M + 60);
