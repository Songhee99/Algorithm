const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let days = [];

input.forEach((num) => days.push(num.split(" ")));

for (let i = 0; i < days.length - 1; i++) {
  let multipl = 0;
  let maxDays = 0;
  let division = parseInt(days[i][2] / days[i][1]);
  let remainder = days[i][2] % days[i][1];

  if (division > 0) multipl = division * days[i][0];
  if (remainder < days[i][0]) maxDays = multipl + remainder;
  if (remainder >= days[i][0]) maxDays = multipl + +days[i][0];

  console.log("Case " + [i + 1] + ": " + maxDays);
}
