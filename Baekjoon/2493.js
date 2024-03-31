const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, tops] = fs.readFileSync(filePath).toString().trim().split("\n");
let topArr = tops.split(" ").map((v) => +v);
let tmpTopArr = [topArr.shift()];
let tmpIdx = [1];
let result = [0];

topArr.splice(0, 0, "null", "null");

for (i = 0; i < topArr.length; i++) {
  if (i == 0 || i == 1) continue;

  while (tmpTopArr.length > 0) {
    let lastTop = tmpTopArr.pop();
    let lastIdx = tmpIdx.pop();

    if (topArr[i] <= lastTop) {
      result.push(lastIdx);
      tmpTopArr.push(lastTop);
      tmpIdx.push(lastIdx);
      tmpTopArr.push(topArr[i]);
      tmpIdx.push(i);
      break;
    }
  }

  if (tmpTopArr.length == 0) {
    result.push(0);
    tmpTopArr.push(topArr[i]);
    tmpIdx.push(i);
  }
}

console.log(result.join(" "));
