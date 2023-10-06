const fs = require("fs");
const filePath = process.platform == "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

for (i = 0; i < input[0]; i++) {
  console.log(input[i + 1].split(",").reduce((acc, cur) => +acc + +cur));
}
