const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [nmb, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, m, b] = nmb.split(" ").map(Number);
const maps = [];
input.forEach((ele) => {
  maps.push(ele.split(" ").map(Number));
});
let height = -1;
let time = Infinity;

for (let h = 0; h <= 256; h++) {
  let tmpB = b;
  let tmpTime = 0;

  maps.forEach((row) => {
    row.forEach((col) => {
      if (col > h) {
        // 높음 -> 땅 파기 (2초))
        tmpB += col - h;
        tmpTime += (col - h) * 2;
      } else if (col < h) {
        // 낮음 -> 땅 채우기 (1초)
        tmpB -= h - col;
        tmpTime += h - col;
      }
    });
  });

  if (tmpB >= 0 && tmpTime <= time) {
    time = tmpTime;
    height = h;
  }
}

console.log(time, height);
