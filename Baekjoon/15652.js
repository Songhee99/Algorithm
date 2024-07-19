const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, m] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);
const nums = Array.from({ length: n }, (v, i) => i + 1);

const getCombinations = (arr, num) => {
  const combinations = [];

  const combine = (tmp, start) => {
    if (tmp.length == num) {
      combinations.push(tmp.join(" "));
      return;
    }

    for (let i = start; i < arr.length; i++) {
      combine([...tmp, arr[i]], i);
    }
  };

  combine([], 0);
  return combinations;
};

const result = getCombinations(nums, m);
console.log(result.join("\n"));
