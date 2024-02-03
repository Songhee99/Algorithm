const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [info, ...data] = fs.readFileSync(filePath).toString().trim().split("\n");
let [n, k, l] = info.split(" ");
let result = [];
let count = 0;

data.forEach((ele) => {
  let members = ele.split(" ");
  if (Math.min(...members) < l) return;
  if (members.reduce((acc, cur) => +acc + +cur) >= k) {
    count++;
    result.push(ele);
  }
});

console.log(count + "\n" + result.join(" "));
