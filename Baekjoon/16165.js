const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [nm, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
let [n, m] = nm.split(" ");
let girlGroupMap = new Map();

for (i = 0; i < +n; i++) {
  let groupName = input.shift();
  let memberNum = input.shift();
  let groupMembers = input.splice(0, +memberNum).sort();

  girlGroupMap.set(groupName, groupMembers);
}

let girlGroupArr = [...girlGroupMap.entries()];

for (j = 0; j < +m * 2; j += 2) {
  let quiz = input[j];
  let type = input[j + 1];

  if (type == 0) console.log(girlGroupMap.get(quiz).join("\n"));
  else {
    for (k = 0; k < +n; k++) {
      if (girlGroupArr[k][1].includes(quiz)) {
        console.log(girlGroupArr[k][0]);
        break;
      }
    }
  }
}
