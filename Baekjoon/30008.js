const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let [n, k] = input[0].split(" ");
let grade = input[1].split(" ");
let result = "";

const percent = (num) => {
  switch (true) {
    case num > 96:
      result += "9 ";
      break;

    case num > 89:
      result += "8 ";
      break;

    case num > 77:
      result += "7 ";
      break;

    case num > 60:
      result += "6 ";
      break;

    case num > 40:
      result += "5 ";
      break;

    case num > 23:
      result += "4 ";
      break;

    case num > 11:
      result += "3 ";
      break;

    case num > 4:
      result += "2 ";
      break;

    case num >= 0:
      result += "1 ";
      break;
  }
};

for (i = 0; i < grade.length; i++) {
  let per = parseInt((grade[i] * 100) / n);
  percent(per);
}

console.log(result.trim());
