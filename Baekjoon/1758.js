const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, ...tips] = fs.readFileSync(filePath).toString().trim().split("\n");
let result = 0;

tips.sort((a, b) => +b - +a);

for (i = 0; i < tips.length; i++) {
  let tip = tips[i] - i;

  if (tip > 0) result += tip;
  else return console.log(result);
}

console.log(result);
