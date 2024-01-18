const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [t, ...cases] = fs.readFileSync(filePath).toString().trim().split("\n");
let result = [];

const calculate = (value, m, n) => {
  while (m != n) {
    value *= m;
    m--;
  }
  return value;
};

cases.forEach((ele) => {
  let [n, m] = ele.split(" ");
  let denominator = 1;
  let numerator = 1;

  if (m - n > n) {
    denominator = calculate(1, +m, +m - +n);
    numerator = calculate(1, +n, 0);
  } else {
    denominator = calculate(1, +m, +n);
    numerator = calculate(1, +m - +n, 0);
  }

  result.push(denominator / numerator);
});

console.log(result.join("\n"));
