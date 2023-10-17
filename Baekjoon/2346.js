const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let balloon = Array(+input[0])
  .fill()
  .map((v, i) => i + 1);
let paper = input[1].split(" ");
let curNum = 1;
let result = "1 ";

for (count = 0; count < +input[0] - 1; count++) {
  balloon[curNum - 1] = 0;
  let tmpCurNum = curNum + +paper[curNum - 1];
  if (balloon[tmpCurNum - 1] == 0) {
    if (+paper[curNum - 1] > 0) {
      while (balloon[tmpCurNum - 1] == 0) {
        tmpCurNum++;
        if (tmpCurNum > +input[0]) tmpCurNum = tmpCurNum - +input[0];
      }
    } else {
      while (balloon[tmpCurNum - 1] == 0) {
        tmpCurNum--;
        if (tmpCurNum <= 0) tmpCurNum += +input[0];
      }
    }
  }
  curNum = tmpCurNum;
  result += curNum + " ";
}
console.log(result);
