const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
let [birth, standardDate] = input.map((v) => v.split(" ").map((v) => +v));

let resultYear = standardDate[0] - birth[0];
let result = [resultYear, resultYear + 1, resultYear];

if (resultYear > 0) {
  if (standardDate[1] < birth[1]) result[0] = resultYear - 1;
  else if (standardDate[1] == birth[1] && standardDate[2] < birth[2]) result[0] = resultYear - 1;
}

console.log(result.join("\n"));
