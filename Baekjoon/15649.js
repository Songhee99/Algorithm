const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, m] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);
const nums = Array.from({ length: n }, (v, i) => i + 1);

const getPermutations = (arr, num) => {
  const permutations = [];

  const permute = (tmp, remaining) => {
    if (tmp.length == num) {
      permutations.push(tmp.join(" "));
      return;
    }

    for (let i = 0; i < remaining.length; i++) {
      permute(
        [...tmp, remaining[i]],
        [...remaining.slice(0, i), ...remaining.slice(i + 1)]
      );
    }
  };

  permute([], arr);
  return permutations;
};

const result = getPermutations(nums, m);
console.log(result.join("\n"));
