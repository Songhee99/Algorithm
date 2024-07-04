const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n = 0;
let m = 0;
const arr = [];
let lineCount = 0;

rl.on("line", (input) => {
  if (lineCount == 0) [n, m] = input.split(" ");
  else arr.push(input);
  lineCount++;
});

rl.on("close", () => {
  let result = 0;
  const total = +n + +m;
  const standard = [];
  for (i = 0; i < +n; i++) {
    standard.push(arr[i].split(" ").map((v) => +v));
  }

  let [len, sp] = standard.pop();

  for (j = total - 1; j >= +n; j--) {
    let [testLen, testSp] = arr[j].split(" ").map((v) => +v);
    let tmpResult = 0;

    while (testLen > len) {
      tmpResult = Math.max(tmpResult, testSp - sp);
      testLen -= len;
      [len, sp] = standard.pop();
    }

    tmpResult = Math.max(tmpResult, testSp - sp);
    len -= testLen;
    if (len == 0 && standard.length > 0) [len, sp] = standard.pop();

    result = Math.max(result, tmpResult);
  }

  console.log(result);

  process.exit();
});
