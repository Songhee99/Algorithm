const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, ...marathoner] = fs.readFileSync(filePath).toString().trim().split("\n");
let completedRace = new Map();

for (i = +n; i < marathoner.length; i++) {
  let name = marathoner[i];
  if (completedRace.has(name)) completedRace.set(name, completedRace.get(name) + 1);
  else completedRace.set(name, 1);
}

for (j = 0; j < +n; j++) {
  const name = marathoner[j];
  if (completedRace.has(name)) completedRace.set(name, completedRace.get(name) - 1);
  else return console.log(name);
}

for (const [name, count] of completedRace) {
  if (count < 0) return console.log(name);
}
