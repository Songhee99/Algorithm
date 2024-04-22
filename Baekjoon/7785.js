const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, ...records] = fs.readFileSync(filePath).toString().trim().split("\n");
const recordMap = new Map();
const result = [];

records.forEach((ele) => {
  let [name, record] = ele.split(" ");
  if (recordMap.get(name) === "enter" && record === "leave")
    recordMap.delete(name);
  else recordMap.set(name, record);
});

[...recordMap].forEach((ele) => {
  result.push(ele[0]);
});

console.log(result.sort().reverse().join("\n"));
