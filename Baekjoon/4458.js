const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, ...cases] = fs.readFileSync(filePath).toString().trim().split("\n");
let result = [];

cases.forEach((ele) => {
  result.push(ele.charAt(0).toUpperCase() + ele.slice(1));
});

console.log(result.join("\n"));
