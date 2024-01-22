const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let overNum = input.reduce((acc, cur) => +acc + +cur) - 100;

for (i = 0; i < input.length - 1; i++) {
  let remainOverNum = overNum - +input[i];
  for (j = i + 1; j < input.length; j++) {
    if (remainOverNum == input[j]) {
      input.splice(i, 1);
      input.splice(j - 1, 1);
      return console.log(input.join("\n"));
    }
  }
}
