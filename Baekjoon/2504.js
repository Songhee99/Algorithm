const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("");
let tmpArr = [];

for (i = 0; i < input.length; i++) {
  if (input[i] == "(" || input[i] == "[") {
    tmpArr.push(input[i]);
  }

  if (input[i] == ")") {
    if (tmpArr[tmpArr.length - 1] == "(") {
      tmpArr.pop();
      tmpArr.push(2);
    } else if (typeof tmpArr[tmpArr.length - 1] == "number") {
      if (tmpArr[tmpArr.length - 2] == "(") {
        let tmpNum = tmpArr.pop();
        tmpArr.pop();
        tmpArr.push(tmpNum * 2);
      } else if (typeof tmpArr[tmpArr.length - 2] == "number") {
        let tmpNum1 = tmpArr.pop();
        let tmpNum2 = tmpArr.pop();
        while (typeof tmpArr[tmpArr.length - 1] == "number") {
          tmpNum1 += tmpNum2;
          tmpNum2 = tmpArr.pop();
        }
        tmpArr.pop();
        tmpArr.push((tmpNum1 + tmpNum2) * 2);
      } else return console.log(0);
    } else return console.log(0);
  }

  if (input[i] == "]") {
    if (tmpArr[tmpArr.length - 1] == "[") {
      tmpArr.pop();
      tmpArr.push(3);
    } else if (typeof tmpArr[tmpArr.length - 1] == "number") {
      if (tmpArr[tmpArr.length - 2] == "[") {
        let tmpNum = tmpArr.pop();
        tmpArr.pop();
        tmpArr.push(tmpNum * 3);
      } else if (typeof tmpArr[tmpArr.length - 2] == "number") {
        let tmpNum1 = tmpArr.pop();
        let tmpNum2 = tmpArr.pop();
        while (typeof tmpArr[tmpArr.length - 1] == "number") {
          tmpNum1 += tmpNum2;
          tmpNum2 = tmpArr.pop();
        }
        tmpArr.pop();
        tmpArr.push((tmpNum1 + tmpNum2) * 3);
      } else return console.log(0);
    } else return console.log(0);
  }
}

let result = tmpArr.reduce((acc, cur) => acc + cur);
if (typeof result != "number") return console.log(0);
console.log(result);
