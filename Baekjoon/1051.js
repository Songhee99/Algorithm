const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [nm, ...nums] = fs.readFileSync(filePath).toString().trim().split("\n");
let [n, m] = nm.split(" ");
let square = 1;

if (n == 1 || m == 1) return console.log(1);

for (i = 0; i < +n - 1; i++) {
  for (j = 0; j < +m - 1; j++) {
    let topLeft = nums[i][j];

    for (k = j + 1; k < +m; k++) {
      if (nums[i][k] == topLeft) {
        let length = +k - +j;
        if (nums[i + length] && nums[i + length][j] == topLeft && nums[i + length][k] == topLeft) {
          square = Math.max(square, (length + 1) ** 2);
        }
      }
    }
  }
}

console.log(square);
