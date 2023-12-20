const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, nArr, m, mArr] = fs.readFileSync(filePath).toString().trim().split("\n");
let result = [];

const sortedNArr = nArr.split(" ").sort((a, b) => +a - +b);

mArr.split(" ").forEach((num) => {
  let left = 0;
  let right = sortedNArr.length - 1;
  let mid = Math.floor((left + right) / 2);

  while (right >= left) {
    if (sortedNArr[mid] > +num) right = mid - 1;
    else left = mid + 1;

    mid = Math.floor((left + right) / 2);
  }
  if (sortedNArr[mid] == num) return result.push(1);
  result.push(0);
});

console.log(result.join(" "));
