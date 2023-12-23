const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let words = fs.readFileSync(filePath).toString().trim().split("\n");

words.shift();
let wordsSet = new Set(words);
let uniqueWords = [...wordsSet].sort().sort(function (a, b) {
  return a.length - b.length;
});

console.log(uniqueWords.join("\n"));
