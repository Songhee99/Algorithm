const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, ...spec] = fs.readFileSync(filePath).toString().trim().split("\n");
let sortSpecMap = new Map();
let result = "";

spec.forEach((ele, idx) => {
  sortSpecMap.set(idx, ele.split(" "));
});

let sortSpecArr = [...sortSpecMap];

sortSpecArr.sort((a, b) => b[1][0] - a[1][0]);
sortSpecArr[0].push(1);

for (i = 1; i < sortSpecArr.length; i++) {
  let count = 1;
  for (j = 0; j < i; j++) {
    if (+sortSpecArr[i][1][0] < +sortSpecArr[j][1][0] && +sortSpecArr[i][1][1] < +sortSpecArr[j][1][1]) count++;
  }
  sortSpecArr[i].push(count);
}

sortSpecArr.sort((a, b) => a[0] - b[0]);
for (k = 0; k < sortSpecArr.length; k++) {
  result += sortSpecArr[k][2] + " ";
}

console.log(result.trim());
