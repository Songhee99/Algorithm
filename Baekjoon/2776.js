const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [t, ...cases] = fs.readFileSync(filePath).toString().trim().split("\n");
let result = "";
let idx = 0;

while (t > 0) {
  let n = cases[0 + idx];
  let note1 = new Set(cases[1 + idx].split(" "));
  let m = cases[2 + idx];
  let note2 = cases[3 + idx].split(" ");

  note2.forEach((ele) => {
    if (note1.has(ele)) result += "1\n";
    else result += "0\n";
  });

  idx += 4;
  t--;
}

console.log(result.trim());
