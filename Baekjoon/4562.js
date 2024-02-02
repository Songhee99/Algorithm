const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, ...xy] = fs.readFileSync(filePath).toString().trim().split("\n");
let result = [];

xy.map((xy) => {
  let [x, y] = xy.split(" ");
  +x - +y < 0 ? result.push("NO BRAINS") : result.push("MMM BRAINS");
});

console.log(result.join("\n"));
