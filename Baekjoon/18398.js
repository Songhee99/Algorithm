const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [t, ...cases] = fs.readFileSync(filePath).toString().trim().split("\n");
let result = [];

for (i = 0; i < +t; i++) {
  let n = cases.shift();
  let problems = cases.splice(0, +n);
  problems.forEach((ele) => {
    let [a, b] = ele.split(" ");
    result.push(+a + +b + " " + a * +b);
  });
}

console.log(result.join("\n"));
