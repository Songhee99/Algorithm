const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [t, ...xy] = fs.readFileSync(filePath).toString().trim().split("\n");
let result = [];

xy.forEach((ele) => {
  let [x, y] = ele.split(" ").map((v) => +v);
  if (x > 23 || y > 59) return result.push("No No");
  if (x < 1 || x > 12 || y < 1 || y > 31) return result.push("Yes No");
  if (y == 30) {
    if (x == 2) return result.push("Yes No");
  } else if (y == 31) {
    if (x == 2 || x == 4 || x == 6 || x == 9 || x == 11) return result.push("Yes No");
  }
  return result.push("Yes Yes");
});

console.log(result.join("\n"));
