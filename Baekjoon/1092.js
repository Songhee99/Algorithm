const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, nStr, m, mStr] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const cranes = nStr
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a); // 크레인은 내림차순
const boxes = mStr
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b); // 박스는 오름차순

if (cranes[0] < boxes[m - 1]) return console.log(-1);

let result = 0;
let stack = [];

while (boxes.length > 0) {
  for (const crane of cranes) {
    if (boxes.length == 0) break;

    while (boxes.length > 0) {
      const curBox = boxes.pop();

      if (crane >= curBox) break;
      else stack.push(curBox);
    }
  }

  result += 1;
  if (stack.length > 0) {
    boxes.push(...stack.reverse());
    stack = [];
  }
}

console.log(result);
