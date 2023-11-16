const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString();

for (i = 0; i < +input; i++) {
  let star = "*";
  for (j = 0; j < i; j++) {
    star += "*";
  }
  console.log(star);
}
