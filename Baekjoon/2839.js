const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();

let fiveKg = parseInt(input / 5);
let remainFive = input % 5;

while (fiveKg > 0) {
  if (remainFive % 3 == 0) {
    let threeKg = parseInt(remainFive / 3);
    return console.log(fiveKg + threeKg);
  } else {
    fiveKg--;
    remainFive += 5;
  }
}

return console.log(input % 3 == 0 ? input / 3 : -1);
