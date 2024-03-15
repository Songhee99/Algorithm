const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [num1, num2] = fs.readFileSync(filePath).toString().trim().split("\n");
let [a1, b1] = num1.split(" ");
let [a2, b2] = num2.split(" ");

let finalA = 0;
let finalB = 0;

if (b1 == b2) {
  finalA = +a1 + +a2;
  finalB = +b1;
} else {
  finalB = +b1 * +b2;
  let newA1 = +a1 * +b2;
  let newA2 = +a2 * +b1;
  finalA = newA1 + newA2;
}

let bigNum = Math.max(finalA, finalB);
let smallNum = Math.min(finalA, finalB);
let remain = bigNum % smallNum;

while (remain != 0) {
  bigNum = smallNum;
  smallNum = remain;
  remain = bigNum % smallNum;
}

let gcd = smallNum;

if (gcd == 1) return console.log(finalA + " " + finalB);

finalA = finalA / gcd;
finalB = finalB / gcd;
console.log(finalA + " " + finalB);
