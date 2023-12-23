const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

if (input.substring(input.length - 1) != 0) {
  console.log("-1");
} else {
  let result = "";
  let newNum = parseInt(input / 60);
  result += parseInt(newNum / 5) + " " + (newNum % 5) + " " + (input % 60) / 10;

  console.log(result);
}
