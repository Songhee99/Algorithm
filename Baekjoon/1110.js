const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().padStart(2, "0");

let count = 0;
let origin = +input;
let newNum = 0;

const plus = (origin) => {
  let sum = Math.floor(origin / 10) + (origin % 10);
  newNum = (origin % 10) * 10 + (sum % 10);
  count++;
};

plus(origin);
origin = newNum;

while (input != origin) {
  plus(origin);
  origin = newNum;
}

console.log(count);
