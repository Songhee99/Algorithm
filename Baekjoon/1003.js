const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [T, ...nums] = fs.readFileSync(filePath).toString().trim().split("\n");
const result = [];
const sumArr = [
  [1, 0],
  [0, 1],
];

nums.map(Number).forEach((num) => {
  if (num != 0 && num != 1)
    for (i = 2; i <= +num; i++) {
      if (!sumArr[i]) {
        sumArr.push([
          sumArr[i - 2][0] + sumArr[i - 1][0],
          sumArr[i - 2][1] + sumArr[i - 1][1],
        ]);
      }
    }
  result.push(sumArr[num].join(" "));
});

console.log(result.join("\n"));
