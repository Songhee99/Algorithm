const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [nm, ...power] = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, m] = nm.split(" ").map(Number);
const titleArr = power.splice(0, n).map((v) => v.split(" "));
const result = [];

power.forEach((ele) => {
  if (+ele <= +titleArr[0][1]) return result.push(titleArr[0][0]);
  else if (+ele > +titleArr[n - 1][1]) return result.push(titleArr[n - 1][0]);

  let start = 0;
  let end = n - 1;

  while (start <= end) {
    let mid = parseInt((start + end) / 2);

    if (+ele <= +titleArr[mid][1]) end = mid - 1;
    else start = mid + 1;
  }
  result.push(titleArr[start][0]);
});

console.log(result.join("\n"));
