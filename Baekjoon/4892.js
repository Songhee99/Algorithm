const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const cases = fs.readFileSync(filePath).toString().trim().split("\n");
let result = [];

for (i = 0; i < cases.length - 1; i++) {
  let str = `${i + 1}. `;
  let n1 = 3 * +cases[i];

  if (n1 % 2 == 0) {
    str += "even ";
    n1 = n1 / 2; // =n2
  } else {
    str += "odd ";
    n1 = (n1 + 1) / 2; // =n2
  }

  n1 = 3 * n1; // =n3

  let n4 = parseInt(n1 / 9);
  result.push(str + n4);
}

console.log(result.join("\n"));
