const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let [n, m] = input[0].split(" ");

for (i = 1; i <= +n; i++) {
  let result = [];
  let aHang = input[i].split(" ");
  let bHang = input[i + +n].split(" ");
  for (j = 0; j < +m; j++) {
    result.push(+aHang[j] + +bHang[j]);
  }
  console.log(result.join(" "));
}
