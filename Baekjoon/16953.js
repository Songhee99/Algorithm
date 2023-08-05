const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [start, arrival] = fs.readFileSync(filePath).toString().trim().split(" ");
let current = arrival;
let count = 1;

while (current != start) {
  if (current % 10 == 1) {
    current = Math.floor(current / 10);
    count++;
  } else if (current % 2 == 0) {
    current = current / 2;
    count++;
  } else {
    return console.log("-1");
  }
  if (current < start) return console.log("-1");
  if (current == start) return console.log(count);
}
