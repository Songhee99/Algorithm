const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("");

let strObj = input.reduce((acc, cur) => {
  cur = cur.toUpperCase();
  acc[cur] = (acc[cur] || 0) + 1;
  return acc;
}, {});

const sortStrObj = Object.fromEntries(Object.entries(strObj).sort((a, b) => b[1] - a[1]));

if (Object.values(sortStrObj)[0] == Object.values(sortStrObj)[1]) return console.log("?");
else console.log(Object.keys(sortStrObj)[0]);
