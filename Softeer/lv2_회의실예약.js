const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lineCount = 0;
let [n, m] = [0, 0];
const roomNames = [];
const reservation = new Map();

rl.on("line", (input) => {
  if (lineCount == 0) [n, m] = input.split(" ");
  else if (lineCount <= +n) roomNames.push(input);
  else {
    const [name, start, end] = input.split(" ");
    if (reservation.has(name)) reservation.get(name).push([+start, +end]);
    else reservation.set(name, [[+start, +end]]);
  }
  lineCount++;
});

rl.on("close", () => {
  result = [];

  roomNames.sort().forEach((name) => {
    if (!reservation.has(name)) {
      result.push(`Room ${name}:`);
      result.push(`1 available:`);
      result.push(`09-18`);
      result.push(`-----`);
    } else {
      sortTimes = reservation.get(name).sort((a, b) => a[0] - b[0]);
      const emptyTime = [];
      tmpLastTime = 9;
      sortTimes.forEach((time) => {
        const [start, end] = time;
        if (start > tmpLastTime) {
          if (tmpLastTime == 9) tmpLastTime = "09";
          emptyTime.push([`${tmpLastTime}-${start}`]);
        }
        tmpLastTime = end;
      });
      if (tmpLastTime != 18) emptyTime.push([`${tmpLastTime}-18`]);

      num = emptyTime.length;

      result.push(`Room ${name}:`);
      if (num == 0) result.push(`Not available`);
      else {
        result.push(`${num} available:`);
        result.push(`${emptyTime.join("\n")}`);
      }
      result.push(`-----`);
    }
  });

  result.pop();
  console.log(result.join("\n"));

  process.exit();
});
