const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

for (i = 0; i < input.length - 1; i++) {
  let num = +input[i];
  let count = 0;

  if (num == 1) {
    console.log(1);
    continue;
  }

  for (j = num + 1; j <= 2 * num; j++) {
    let notSosu = 0;

    for (k = 2; k <= Math.sqrt(j); k++) {
      if (j % k == 0) {
        notSosu++;
        break;
      }
    }
    if (notSosu == 0) count++;
  }
  console.log(count);
}
