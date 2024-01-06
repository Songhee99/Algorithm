const fs = require("fs");
const filePath = process.platform == "linux" ? "/dev/stdin" : "./input.txt";
let [t, ...nums] = fs.readFileSync(filePath).toString().trim().split("\n");

nums.forEach((ele) => {
  let [a, b] = ele.split(" ");
  if (b == 1) return console.log(a % 10 == 0 ? 10 : a % 10);

  let num = a;
  for (i = 1; i < b; i++) {
    num = (num * a) % 10;
  }
  console.log(num == 0 ? 10 : num);
});
