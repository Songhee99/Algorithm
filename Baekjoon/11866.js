const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [nm, ...abs] = fs.readFileSync(filePath).toString().trim().split(" ");
const [n, m] = nm.split(" ").map(Number);
