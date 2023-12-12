const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, num] = fs.readFileSync(filePath).toString().trim().split("\n");
let nums = num.split(" ");
let count = 0;

if (n == 1) return console.log(1);

const increse = (arr) => {
  for (i = 0; i < arr.length - 1; i++) {
    let tmpCount = 1;

    while (+arr[i] <= +arr[i + 1]) {
      i++;
      tmpCount++;
    }
    count = Math.max(count, tmpCount);
    if (i == arr.length - 1) return;
  }
};

const decrese = (arr) => {
  for (i = 0; i < arr.length - 1; i++) {
    let tmpCount = 1;

    while (+arr[i] >= +arr[i + 1]) {
      i++;
      tmpCount++;
    }
    count = Math.max(count, tmpCount);
    if (i == arr.length - 1) return;
  }
};

increse(nums);
decrese(nums);
console.log(count);
