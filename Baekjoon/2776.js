const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [t, ...cases] = fs.readFileSync(filePath).toString().trim().split("\n");
let finalResult = [];
let count = 0;

while (t > 0) {
  let tmpResult = [];
  let note1Count = cases[0 + count];
  let note1 = cases[1 + count]
    .split(" ")
    .sort((a, b) => a - b)
    .map((v) => +v);
  let note2Count = cases[2 + count];
  let note2 = cases[3 + count]
    .split(" ")
    .map((v, idx) => [+v, idx])
    .sort((a, b) => a[0] - b[0]);

  let curIdx = 0;
  note2.forEach(([v, idx]) => {
    while (note1[curIdx] <= v) {
      if (note1[curIdx] == v) {
        tmpResult.push([1, idx]);
        return;
      } else curIdx++;
    }
    tmpResult.push([0, idx]);
  });

  tmpResult
    .sort((a, b) => a[1] - b[1])
    .forEach((ele) => {
      finalResult.push(ele[0]);
    });

  count += 4;
  t--;
}

console.log(finalResult.join("\n"));
