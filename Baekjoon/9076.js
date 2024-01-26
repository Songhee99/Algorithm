const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [t, ...cases] = fs.readFileSync(filePath).toString().trim().split("\n");
let result = [];

cases.forEach((ele) => {
  let score = ele.split(" ").sort((a, b) => +a - +b);
  score.shift();
  score.pop();

  if (+score[2] - +score[0] >= 4) result.push("KIN");
  else result.push(+score[0] + +score[1] + +score[2]);
});

console.log(result.join("\n"));
