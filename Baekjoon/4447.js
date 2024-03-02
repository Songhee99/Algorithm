const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, ...names] = fs.readFileSync(filePath).toString().trim().split("\n");
let result = [];

names.forEach((ele) => {
  let gMinusLength = ele.length - ele.replace(/g/gi, "").length;
  let bMinusLength = ele.length - ele.replace(/b/gi, "").length;

  if (gMinusLength > bMinusLength) result.push(ele + " is GOOD");
  else if (gMinusLength == bMinusLength) result.push(ele + " is NEUTRAL");
  else if (gMinusLength < bMinusLength) result.push(ele + " is A BADDY");
});

console.log(result.join("\n"));
