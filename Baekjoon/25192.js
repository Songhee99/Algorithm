const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, ...chats] = fs.readFileSync(filePath).toString().trim().split("\n");
let nicknameArr = new Set();
let count = 0;

chats.forEach((ele) => {
  if (ele == "ENTER") nicknameArr.clear();
  else if (!nicknameArr.has(ele)) {
    count++;
    nicknameArr.add(ele);
  }
});

console.log(count);
