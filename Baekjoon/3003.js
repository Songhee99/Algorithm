const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let inputArr;
for (let i = 0; i < input.length; i++) {
  inputArr = input[i].split(" ").map((item) => +item);
}

console.log(1 - inputArr[0]);
console.log(1 - inputArr[1]);
console.log(2 - inputArr[2]);
console.log(2 - inputArr[3]);
console.log(2 - inputArr[4]);
console.log(8 - inputArr[5]);

//반복문으로도 풀 수 있음
