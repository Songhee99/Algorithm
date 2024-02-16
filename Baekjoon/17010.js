const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [l, ...messages] = fs.readFileSync(filePath).toString().trim().split("\n");
let result = [];

messages.forEach((ele) => {
  let [n, text] = ele.split(" ");
  result.push(text.repeat(+n));
});

console.log(result.join("\n"));
