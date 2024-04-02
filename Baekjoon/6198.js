const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
let heights = input.map((v) => +v);
let stack = [[heights.pop(), +n - 1]];
let peek = stack[0];
let count = 0;

label: for (i = +n - 2; i >= 0; i--) {
  let curBuilding = heights.pop();
  if (peek[0] < curBuilding) {
    stack = [];
    stack.push([curBuilding, i]);
    peek = [curBuilding, i];
    count += +n - 1 - i; // 지금까지 가장 높은 거니까 뒤의 모든 빌딩 다 보임
  } else {
    while (1) {
      if (stack.length == 1) {
        // stack에 peek만 남은 경우
        stack.push([curBuilding, i]);
        count += peek[1] - i - 1;
        continue label;
      }

      let [height, idx] = stack.pop();
      if (height >= curBuilding) {
        if (height > curBuilding) stack.push([height, idx]);
        stack.push([curBuilding, i]);
        count += idx - i - 1;
        continue label;
      }
    }
  }
}

console.log(count);
