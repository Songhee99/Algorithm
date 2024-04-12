const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [t, ...cases] = fs.readFileSync(filePath).toString().trim().split("\n");
let result = [];

cases.forEach((ele) => {
  let bracketArr = ele.split("");
  let tmpArr = [];

  for (bracket of bracketArr) {
    if (tmpArr[0] === ")") return result.push("NO");

    let length = tmpArr.length;
    if (length > 0 && tmpArr[length - 1] !== bracket) {
      tmpArr.pop();
    } else tmpArr.push(bracket);
  }

  result.push(tmpArr.length > 0 ? "NO" : "YES");
});

console.log(result.join("\n"));
