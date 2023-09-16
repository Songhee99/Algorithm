const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let maxLeng = Math.max(...input.map((v) => v.length));
let verticalStr = "";

for (i = 0; i < maxLeng; i++) {
  input.forEach((ele) => {
    verticalStr += ele.slice(i, i + 1);
  });
}

console.log(verticalStr);
