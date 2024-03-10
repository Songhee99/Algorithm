const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [t, ...cases] = fs.readFileSync(filePath).toString().trim().split("\n");
let result = [];

while (cases.length > 0) {
  let n = cases.shift();

  if (n == 0) {
    result.push(0);
    continue;
  }

  let costumes = cases.splice(0, +n);
  let costumesMap = new Map();

  costumes.forEach((ele) => {
    let [name, kind] = ele.split(" ");
    if (costumesMap.has(kind)) costumesMap.set(kind, costumesMap.get(kind) + 1);
    else costumesMap.set(kind, 1);
  });

  let costumesCount = [...costumesMap.values()];
  let combination = costumesCount.reduce((acc, cur) => acc * (cur + 1), 1);

  result.push(combination - 1);
}

console.log(result.join("\n"));
