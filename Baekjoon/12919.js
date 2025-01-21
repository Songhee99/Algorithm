const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [s, t] = fs.readFileSync(filePath).toString().trim().split("\n");
const sLen = s.length;
let result = 0;

const dfs = (str) => {
  if (result == 1) return;

  if (str.length == sLen) {
    if (str == s) return (result = 1);
    return;
  }

  if (str[str.length - 1] == "A") dfs(str.slice(0, str.length - 1));
  if (str[0] == "B") dfs(str.slice(1).split("").reverse().join(""));
};

dfs(t);

console.log(result);
