const fs = require("fs");
const filePath = process.platform == "linux" ? "/dev/stdin" : "./input.txt";
let [t, s] = fs.readFileSync(filePath).toString().trim().split(" ");

console.log(12 <= t && t <= 16 && s == 0 ? 320 : 280);
