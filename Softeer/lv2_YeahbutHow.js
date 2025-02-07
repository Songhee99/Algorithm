const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let s;

rl.on("line", (input) => {
  s = input;
});

rl.on("close", () => {
  let result = [];

  for (const piece of s) {
    if (result.length == 0) {
      result.push(piece);
      continue;
    }

    if (result[result.length - 1] == "(") {
      if (piece == "(") result.push("1+", piece);
      else result.push("1", piece);
    } else {
      if (piece == "(") result.push("+", piece);
      else result.push(piece);
    }
  }

  console.log(result.join(""));
  process.exit();
});
