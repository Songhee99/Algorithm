const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let [n, k] = input[0].split(" ");

for (i = 1; i <= +n; i++) {
  let result = "";
  input[i] += " ";

  for (j = 0; j < input[i].length; j += 2) {
    result += input[i].slice(j, j + 2).repeat(+k);
  }

  for (column = 0; column < +k; column++) {
    console.log(result.trim());
  }
}
