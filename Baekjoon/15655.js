const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [nm, nums] = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, m] = nm.split(" ").map(Number);
const sortedNums = nums
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

const getCombinations = (arr, num) => {
  const combinations = [];
  const tmp = [];

  const combine = (count, start) => {
    if (count == num) {
      combinations.push(tmp.join(" "));
      return;
    }

    for (let i = start; i < arr.length; i++) {
      tmp.push(arr[i]);
      combine(count + 1, i + 1);
      tmp.pop();
    }
  };

  combine(0, 0);
  return combinations;
};

const result = getCombinations(sortedNums, m);
console.log(result.join("\n"));
