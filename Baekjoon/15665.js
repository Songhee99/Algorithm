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

const getProduct = (arr, num) => {
  const product = [];

  const permute = (tmp) => {
    if (tmp.length == num) {
      product.push(tmp.join(" "));
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      permute([...tmp, arr[i]]);
    }
  };

  permute([]);
  return product;
};

const result = getProduct(sortedNums, m);
console.log(result.join("\n"));
