const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, ...houseColors] = fs.readFileSync(filePath).toString().trim().split("\n");
const colorPrice = houseColors.map((v, i) => v.split(" ").map((v, i) => +v));

for (i = 1; i < +n; i++) {
  colorPrice[i][0] += Math.min(colorPrice[i - 1][1], colorPrice[i - 1][2]);
  colorPrice[i][1] += Math.min(colorPrice[i - 1][0], colorPrice[i - 1][2]);
  colorPrice[i][2] += Math.min(colorPrice[i - 1][0], colorPrice[i - 1][1]);
}

console.log(Math.min(...colorPrice[n - 1]));
