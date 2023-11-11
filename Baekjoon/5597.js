const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let submit = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .sort(function (next, prev) {
    return next - prev;
  });
let nonSubmitted = [];
let nonSubmit = 1;

for (let idx = 0; idx < submit.length + 1; idx++) {
  if (+submit[idx] != nonSubmit) {
    nonSubmitted.push(nonSubmit);
    idx--;
  }
  if (nonSubmitted.length == 2) {
    return console.log(nonSubmitted.join("\n"));
  }
  nonSubmit++;
}
