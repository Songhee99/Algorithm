const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, ...times] = fs.readFileSync(filePath).toString().trim().split("\n");
let count = 0;
let start = -1;
let end = -1;

times
  .sort((a, b) => a.split(" ")[1] - b.split(" ")[1])
  .sort((a, b) => a.split(" ")[0] - b.split(" ")[0]);

times.forEach((ele) => {
  const [prev, next] = ele.split(" ").map(Number);

  if (prev >= end) {
    start = prev;
    end = next;
    count++;
  } else if (next < end) end = next;
});

console.log(count);
