const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, ...orders] = fs.readFileSync(filePath).toString().trim().split("\n");
let stack = [];
let result = [];

orders.forEach((ele) => {
  switch (ele) {
    case "pop":
      result.push(stack.length > 0 ? stack.pop() : -1);
      break;
    case "size":
      result.push(stack.length);
      break;
    case "empty":
      result.push(stack.length > 0 ? 0 : 1);
      break;
    case "top":
      result.push(stack.length > 0 ? stack[stack.length - 1] : -1);
      break;
    default:
      let [order, num] = ele.split(" ");
      stack.push(num);
      break;
  }
});

console.log(result.join("\n"));
