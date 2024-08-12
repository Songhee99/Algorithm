const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [ndkc, ...nums] = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, d, k, c] = ndkc.split(" ").map(Number);
const repeatNums = [...nums, ...nums.slice(0, k - 1)].map(Number);
let count = 0;
let unique = false;

for (let i = 0; i < n; i++) {
  const tmpNums = repeatNums.slice(i, i + k);
  const tmpSet = new Set(tmpNums);
  const tmpCount = tmpSet.size;
  const tmpUnique = tmpSet.has(c);

  if (tmpCount == k && !tmpUnique) return console.log(k + 1);

  if (tmpCount > count) {
    count = tmpCount;
    result = tmpNums;
    unique = tmpUnique;
  } else if (tmpCount == count && !tmpUnique) unique = false;
}

console.log(unique ? count : count + 1);
