const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

for (i = 0; i < input.length - 1; i++) {
  let briefStr = input[i].replace(/[a-zA-Z\s]/g, "");
  let leftStr = [];

  for (j = 0; j < briefStr.length; j++) {
    if (briefStr[j] == "." && leftStr.length == 0) {
      console.log("yes");
      break;
    }

    if (briefStr[j] == "(" || briefStr[j] == "[") leftStr.push(briefStr[j]);
    else if (briefStr[j] == ")" && leftStr[leftStr.length - 1] == "(") leftStr.pop();
    else if (briefStr[j] == "]" && leftStr[leftStr.length - 1] == "[") leftStr.pop();
    else {
      console.log("no");
      break;
    }
  }
}
