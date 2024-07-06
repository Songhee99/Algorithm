const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let t = 0;
let inputs = [];
let lineCount = 0;

rl.on("line", (input) => {
  if (lineCount == 0) t = +input;
  else inputs.push(input);
  lineCount++;
});

rl.on("close", () => {
  let idx = 0;
  const result = [];

  for (i = 0; i < t; i++) {
    const n = +inputs[idx++];
    const openKeys_1 = inputs[idx++].split(" ");
    const openKeys_2 = inputs[idx++].split(" ");
    const secretKeys = inputs[idx++].split(" ");
    const changeWay = new Map();
    const tmpResult = [];

    openKeys_2.forEach((ele, idx) => {
      const nextIdx = openKeys_1.indexOf(ele);
      changeWay.set(idx, nextIdx);
    });

    changeWay.forEach((next, prev) => {
      tmpResult[next] = secretKeys[prev];
    });

    result.push(tmpResult.join(" "));
  }
  console.log(result.join("\n"));
  process.exit();
});
