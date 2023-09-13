const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let [n, m] = input[0].split(" ");
let arr = Array(+n)
  .fill()
  .map((v, i) => i + 1);

for (i = 1; i <= +m; i++) {
  let change = input[i].split(" ");
  let tmp = arr[change[0] - 1];
  arr[change[0] - 1] = arr[change[1] - 1];
  arr[change[1] - 1] = tmp;
}

console.log(arr.join(" "));
