const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();
let count = 99;

if (input.length < 3) return console.log(input);
if (input.length == 4) return console.log(144);
for (i = 100; i <= input; i++) {
  let numSplit = i.toString().split("");
  if (+numSplit[0] + +numSplit[2] == 2 * numSplit[1]) count++;
}

console.log(count);
