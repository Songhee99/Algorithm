const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim() + ".";
let result = [];

while (input.length != 0) {
  let dotIndex = input.indexOf(".");

  if (dotIndex == 0) {
    result.push("");
    input = input.substring(1);
    continue;
  }

  let bCount = dotIndex % 4;

  if (bCount % 2 != 0) return console.log(-1);

  let aCount = parseInt(dotIndex / 4);

  result.push("AAAA".repeat(aCount) + "BB".repeat(bCount / 2));
  input = input.substring(dotIndex + 1);
}

console.log(result.join("."));
