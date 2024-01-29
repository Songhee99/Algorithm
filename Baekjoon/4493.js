const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [t, ...cases] = fs.readFileSync(filePath).toString().trim().split("\n");
let result = [];
let score = [0, 0];

for (i = 0; i < +t; i++) {
  score = [0, 0];
  let n = cases.shift();
  let games = cases.splice(0, +n);
  for (j = 0; j < +n; j++) {
    let game = games[j].split(" ");
    switch (game[0]) {
      case "R":
        if (game[1] == "R") break;
        else if (game[1] == "P") score[1]++;
        else if (game[1] == "S") score[0]++;
        break;

      case "P":
        if (game[1] == "R") score[0]++;
        else if (game[1] == "P") break;
        else if (game[1] == "S") score[1]++;
        break;

      case "S":
        if (game[1] == "R") score[1]++;
        else if (game[1] == "P") score[0]++;
        else if (game[1] == "S") break;
        break;
    }
  }
  if (score[0] > score[1]) result.push("Player 1");
  else if (score[0] == score[1]) result.push("TIE");
  else if (score[0] < score[1]) result.push("Player 2");
}

console.log(result.join("\n"));
