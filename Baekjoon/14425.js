const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [nm, ...words] = fs.readFileSync(filePath).toString().trim().split("\n");
let [n, m] = nm.split(" ");
let gruopS = new Set(words.splice(0, +n));
let count = 0;

words.forEach((ele) => {
  if (gruopS.has(ele)) count++;
});

console.log(count);
