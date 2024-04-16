const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [a, p] = fs.readFileSync(filePath).toString().trim().split(" ");
let repeatArr = [+a];
let idx = 0;

while (1) {
  let num = (repeatArr[idx] + "").split("");
  let newNum = num.reduce((acc, cur) => acc + cur ** +p, 0);
  let repeatNum = repeatArr.indexOf(newNum);

  if (repeatNum != -1) return console.log(repeatNum);

  repeatArr.push(newNum);
  idx++;
}
