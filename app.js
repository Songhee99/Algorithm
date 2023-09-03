const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let result = "";

for (i = 1; i <= input[0]; i++) {
  let testCase = input[i].split(" ");
  testCase[1].split("").forEach((ele) => {
    result += ele.repeat(testCase[0]);
  });
  result += "\n";
}

console.log(result.trim());
