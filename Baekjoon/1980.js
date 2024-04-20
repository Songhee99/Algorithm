const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, m, t] = fs.readFileSync(filePath).toString().trim().split(" ");
const small = Math.min(+n, +m);
const big = Math.max(+n, +m);
const result = [];

let dividing_small = parseInt(+t / small);
let remain_small = +t % small;

if (remain_small === 0) return console.log(dividing_small, 0);

result.push(dividing_small, remain_small);

let dividing_big = 0;
while (dividing_small > 0 && remain_small % big !== 0) {
  dividing_small--;
  remain_small += small;

  if (remain_small >= big) {
    dividing_big++;
    remain_small -= big;
  }

  if (remain_small < result[1]) {
    result[0] = dividing_small + dividing_big;
    result[1] = remain_small;
  }
}

return console.log(result.join(" "));
