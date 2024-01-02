const fs = require("fs");
const filePath = process.platform == "linux" ? "/dev/stdin" : "./input.txt";
let [t, ...cases] = fs.readFileSync(filePath).toString().trim().split("\n");

cases.forEach((ele) => {
  let [c, v] = ele.split(" ");
  console.log(`You get ${parseInt(c / v)} piece(s) and your dad gets ${c % v} piece(s).`);
});
