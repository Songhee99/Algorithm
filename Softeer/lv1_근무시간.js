const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let times = [];

rl.on("line", (input) => {
  times.push(input.split(" "));
});

rl.on("close", () => {
  sum = 0;

  times.forEach((ele) => {
    minutes = [];
    ele.forEach((time) => {
      let [hh, mm] = time.split(":");
      minutes.push(+hh * 60 + +mm);
    });
    sum += minutes[1] - minutes[0];
  });

  console.log(sum);

  process.exit();
});
