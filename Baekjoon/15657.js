const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [nm, nums] = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, m] = nm.split(" ").map(Number);
const sortedNums = [
  ...new Set(
    nums
      .split(" ")
      .map(Number)
      .sort((a, b) => a - b)
  ),
];

const getCombinationsWithReplacement = (arr, num) => {
  const combinationsWithReplacement = [];

  const combine = (tmp, startIdx) => {
    if (tmp.length == num) {
      combinationsWithReplacement.push(tmp.join(" "));
      return;
    }

    for (let i = startIdx; i < arr.length; i++) {
      combine([...tmp, arr[i]], i);
    }
  };

  combine([], 0);
  return combinationsWithReplacement;
};

const result = getCombinationsWithReplacement(sortedNums, m);
console.log(result.join("\n"));
