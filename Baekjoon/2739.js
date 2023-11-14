const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

function multipl(input) {
  for (let i = 0; i < 9; i++) {
    let value = +input * (i + 1);
    console.log(`${input} * ${i + 1} = ${value}`);
  }
}

multipl(input);
