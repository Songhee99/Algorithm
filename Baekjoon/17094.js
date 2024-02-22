const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [sLength, s] = fs.readFileSync(filePath).toString().trim().split("\n");

let twoLength = +sLength - s.replace(/2/g, "").length;
let eLength = +sLength - s.replace(/e/g, "").length;

if (twoLength == eLength) return console.log("yee");
console.log(twoLength > eLength ? "2" : "e");
