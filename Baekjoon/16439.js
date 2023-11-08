const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [info, ...chickens] = fs.readFileSync(filePath).toString().trim().split("\n");
let [n, m] = info.split(" ");
let result = 0;
let chickensArr = [];
chickens.forEach((ele) => {
  chickensArr.push(ele.split(" "));
});

if (+n <= 3 || +m == 3) {
  chickens.forEach((ele) => {
    result += Math.max(...ele.split(" "));
  });
  return console.log(result);
}

for (i = 0; i < +m - 2; i++) {
  for (j = i + 1; j < +m - 1; j++) {
    for (k = i + 2; k < +m; k++) {
      let tmpMax = 0;
      chickensArr.forEach((ele) => {
        tmpMax += Math.max(+ele[i], +ele[j], +ele[k]);
      });

      if (tmpMax > result) result = tmpMax;
    }
  }
}
console.log(result);
