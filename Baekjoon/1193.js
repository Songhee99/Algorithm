const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();
let count = 1;
let sum = 1;

while (input > sum) {
  sum += (count + 2) * 2 - 1;
  count += 2;
}

let gap = sum - input;
let molecule = 0;
let denominator = 0;

if (gap + 1 <= count) {
  molecule = gap + 1;
  denominator = count - gap;
} else {
  molecule = 2 * count - gap - 1;
  denominator = count - molecule;
}

console.log(molecule + "/" + denominator);
