const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [phoneNumOne, phoneNumTwo] = fs.readFileSync(filePath).toString().trim().split("\n");
let sumNumStr = "";

for (i = 0; i < 8; i++) {
  sumNumStr += phoneNumOne[i] + "" + phoneNumTwo[i];
}

let sumNumArr = sumNumStr.split("");
let calcArr = [];

const calcFunc = (arr) => {
  calcArr = [];

  arr.reduce((acc, cur) => {
    calcArr.push((+acc + +cur) % 10);
    return (acc = cur);
  });

  sumNumArr = [...calcArr];
};

while (sumNumArr.length != 2) {
  calcFunc(sumNumArr);
}

console.log(sumNumArr.join(""));
