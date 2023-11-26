const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

for (let i = 0; i < input.length - 1; i++) {
  let changeArr = [0, 0, 0, 0];
  let num = input[i + 1];

  changeArr[0] += parseInt(num / 25);
  changeArr[1] += parseInt((num % 25) / 10);
  changeArr[2] += parseInt(((num % 25) % 10) / 5);
  changeArr[3] += parseInt(num % 5);

  console.log(changeArr.join(" "));
}
