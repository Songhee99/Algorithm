const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [info, ...changeArr] = fs.readFileSync(filePath).toString().trim().split("\n");
let [n, x, k] = info.split(" ");

changeArr.forEach((ele) => {
  let change = ele.split(" ");
  if (change.includes(x)) change.indexOf(x) == 0 ? (x = change[1]) : (x = change[0]);
});

console.log(x);
