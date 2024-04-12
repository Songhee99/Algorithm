const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, ...sentences] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
let writing = sentences.pop().split(" ");
let sentenceArr = [];
let writingIdx = 0;

sentences.forEach((ele) => {
  let sentence = ele.split(" ");
  sentenceArr.push([sentence, 0, sentence.length]);
});

while (writingIdx < writing.length) {
  let possibility = false;

  sentenceArr.forEach((ele) => {
    if (ele[1] == ele[2]) return;

    let idx = ele[1];
    while (
      ele[0][idx] == writing[writingIdx] &&
      writing[writingIdx] != undefined
    ) {
      possibility = true;
      writingIdx++;
      idx++;
      ele[1] = idx;
    }
  });

  if (possibility === false) return console.log("Impossible");
}

for (i = 0; i < sentenceArr.length; i++) {
  let sentence = sentenceArr[i];
  if (sentence[1] != sentence[2]) return console.log("Impossible");
}

console.log("Possible");
