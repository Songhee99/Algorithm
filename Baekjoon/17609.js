const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [t, ...strs] = fs.readFileSync(filePath).toString().trim().split("\n");
const result = [];

const checkPrev = (str, last, mid) => {
  let count = 0;

  for (let i = 0; i < mid; i++) {
    if (i >= last) break;

    if (str[i] != str[last]) {
      if (str[i + 1] == str[last]) i++;
      else return 2;
      count++;
    }
    last--;
  }
  return count;
};

const checkNext = (str, last, mid) => {
  let count = 0;

  for (let i = 0; i < mid; i++) {
    if (i >= last) break;

    if (str[i] != str[last]) {
      if (str[last - 1] == str[i]) last--;
      else return 2;
      count++;
    }
    last--;
  }
  return count;
};

for (const str of strs) {
  const len = str.length;
  const mid = Math.ceil(len / 2);
  let count = checkPrev(str, len - 1, mid);

  if (count > 1) count = checkNext(str, len - 1, mid);

  if (count == 0) result.push("0");
  else if (count == 1) result.push("1");
  else result.push("2");
}

console.log(result.join("\n"));
