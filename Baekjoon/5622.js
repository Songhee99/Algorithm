const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();
let sum = 0;

for (i = 0; i < input.length; i++) {
  let alp = input.charCodeAt(i) - 65;
  if (alp < 15) {
    sum += parseInt(alp / 3) + 3;
  } else {
    if (alp / 4 <= 4.5) sum += 8;
    else if (alp / 4 <= 5.25) sum += 9;
    else sum += 10;
  }
}

console.log(sum);
