const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let result = [];
input.splice(-1);

input.forEach((ele) => {
  ele = ele.split(" ");
  if (ele[1] % ele[0] == 0) result.push("factor");
  else if (ele[0] % ele[1] == 0) result.push("multiple");
  else result.push("neither");
});

console.log(result.join("\n"));
