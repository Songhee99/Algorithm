const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, m] = input.splice(0, 1).join("").split(" ");
const notHear = new Set(input.splice(0, +n));
let notSee = new Set(input);
let notHearAndSee = [];

notSee.forEach((item) => {
  if (notHear.has(item)) notHearAndSee.push(item);
});

console.log(notHearAndSee.length + "\n" + notHearAndSee.sort().join("\n"));
