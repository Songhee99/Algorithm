const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [num, ...character] = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, m] = num.split(" ");
const title = character.splice(0, +n).map((v, i) => v.split(" "));
let answer = [];
let caseNum = 0;

for (item of character) {
  while (true) {
    if (+item <= +title[caseNum][1]) {
      answer.push(title[caseNum][0]);
      break;
    }
    caseNum++;
  }
}

console.log(answer.join("\n"));
