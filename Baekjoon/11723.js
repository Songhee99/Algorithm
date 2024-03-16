const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [m, ...dataes] = fs.readFileSync(filePath).toString().trim().split("\n");
let groupS = new Map();

dataes.forEach((ele) => {
  let [calculation, num] = ele.split(" ");
  if (calculation === "add") {
    if (!groupS.has(num)) groupS.set(num);
  } else if (calculation === "remove") {
    if (groupS.has(num)) groupS.delete(num);
  } else if (calculation === "check") {
    groupS.has(num) ? console.log(1) : console.log(0);
  } else if (calculation === "toggle") {
    groupS.has(num) ? groupS.delete(num) : groupS.set(num);
  } else if (calculation == "all") {
    for (i = 1; i <= 20; i++) {
      groupS.set(i.toString());
    }
  } else groupS.clear();
});

// 언어 제한으로 인해 node.js로 풀면 컴파일 에러 발생
