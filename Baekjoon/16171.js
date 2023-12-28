const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [s, k] = fs.readFileSync(filePath).toString().trim().split("\n");
let alphabetS = s.replace(/[0-9]/g, "");

alphabetS.includes(k) ? console.log(1) : console.log(0);
