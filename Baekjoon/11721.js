const fs = require("fs");
const filePath = process.platform == "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("");

while (input.length > 0) {
  console.log(input.splice(0, 10).join(""));
}
