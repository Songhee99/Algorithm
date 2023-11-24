const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [size, ...floor] = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, m] = size.split(" ");
const floorShape = floor.map((v, i) => v.split(""));
let count = 0;

for (i = 0; i < +n; i++) {
  let continueWidth = true;
  for (j = 0; j < +m; j++) {
    if (continueWidth == true && floorShape[i][j] == "-") {
      count++;
      continueWidth = false;
    } else if (floorShape[i][j] == "|") continueWidth = true;
  }
}

for (j = 0; j < +m; j++) {
  let continueHeight = true;
  for (i = 0; i < +n; i++) {
    if (continueHeight == true && floorShape[i][j] == "|") {
      count++;
      continueHeight = false;
    } else if (floorShape[i][j] == "-") continueHeight = true;
  }
}

console.log(count);
