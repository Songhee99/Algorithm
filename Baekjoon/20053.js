const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

for (i = 0; i < 2 * input[0]; i += 2) {
  let numArr = input[i + 2].split(" ").map((ele) => {
    return +ele;
  });

  let max = Math.max(...numArr);
  let min = Math.min(...numArr);
  console.log(min + " " + max);
}
