const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [nmk, ...greetings] = fs.readFileSync(filePath).toString().trim().split("\n");
let [n, m, k] = nmk.split(" ");

const greetingTurn = (greetings) => {
  let aroundPeoples = new Array(+n).fill(0);
  let newGreetings = [];

  greetings.forEach((ele) => {
    let prevPerson = +ele - 1;
    let nextPerson = +ele + 1;

    if (+ele == 0) prevPerson = +n - 1;
    if (nextPerson == +n) nextPerson = 0;

    aroundPeoples[prevPerson]++;
    aroundPeoples[nextPerson]++;
  });

  aroundPeoples.forEach((ele, index) => {
    if (ele == 1) newGreetings.push(index);
  });

  return newGreetings;
};

for (i = 0; i < +k; i++) {
  greetings = greetingTurn(greetings);
}

console.log(greetings.length);
