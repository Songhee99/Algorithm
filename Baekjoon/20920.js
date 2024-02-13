const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [nm, ...words] = fs.readFileSync(filePath).toString().trim().split("\n");
let [n, m] = nm.split(" ");

let mLengthUp = [];
words.forEach((ele) => {
  if (ele.length >= +m) mLengthUp.push(ele);
});

let alphabetSorted = mLengthUp.sort();
let lengthSorted = alphabetSorted.sort((a, b) => b.length - a.length);

let frequency = [];
let count = 1;
for (i = 0; i < lengthSorted.length; i++) {
  if (lengthSorted[i] == lengthSorted[i + 1]) count++;
  else {
    frequency.push([lengthSorted[i], count]);
    count = 1;
  }
}

let frequencySorted = frequency.sort((a, b) => b[1] - a[1]);

let result = [];
frequencySorted.forEach((ele) => result.push(ele[0]));

console.log(result.join("\n"));
