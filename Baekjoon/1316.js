const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, ...strs] = fs.readFileSync(filePath).toString().trim().split("\n");
let count = 0;

strs.forEach((ele) => {
  let str = ele;
  let chatArr = [str[0]];

  for (j = 1; j < str.length; j++) {
    if (chatArr[chatArr.length - 1] == str[j]) continue;
    if (chatArr.includes(str[j])) return;
    chatArr.push(str[j]);
  }
  count++;
});

console.log(count);
