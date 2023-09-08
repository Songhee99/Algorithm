const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("");

for (i = 0; i < parseInt(input.length / 2); i++) {
  if (input[i] != input[input.length - 1 - i]) return console.log(0);
}

return console.log(1);
