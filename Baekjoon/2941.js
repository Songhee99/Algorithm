const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

console.log(input.replace(/c=|c-|dz=|d-|lj|nj|s=|z=/gi, "a").length);
