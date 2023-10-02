const fs = require("fs");
const filePath = process.platform == "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let setInput = new Set(input);

let sum = input.reduce((acc, cur) => +acc + +cur);

if (sum != 180) return console.log("Error");
else {
  if (setInput.size == 1) return console.log("Equilateral");
  if (setInput.size == 2) return console.log("Isosceles");
  return console.log("Scalene");
}
