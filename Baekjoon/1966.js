const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [t, ...cases] = fs.readFileSync(filePath).toString().trim().split("\n");

for (i = 0; i < 2 * t; i += 2) {
  let [n, m] = cases[i].split(" ");
  let docs = cases[i + 1].split(" ");
  let count = 0;

  while (true) {
    let maxNum = Math.max(...docs);
    let accNum = docs.shift();

    if (maxNum == accNum) {
      count++;
      if (+m == 0) {
        console.log(count);
        break;
      }
    } else docs.push(accNum);

    +m--;
    if (+m < 0) m += docs.length;
  }
}
