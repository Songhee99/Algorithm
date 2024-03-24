const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [t, ...dataes] = fs.readFileSync(filePath).toString().trim().split("\n");

while (+t > 0) {
  let cryingArr = dataes.shift().split(" ");

  let animalsCrying = [];
  for (i = 0; ; i++) {
    if (dataes[i] == "what does the fox say?") {
      dataes.splice(0, i + 1);
      break;
    }
    let [animal, goes, crying] = dataes[i].split(" ");
    animalsCrying.push(crying);
  }

  for (i = 0; i < cryingArr.length; i++) {
    if (animalsCrying.includes(cryingArr[i])) {
      cryingArr.splice(i, 1);
      i--;
    }
  }
  console.log(cryingArr.join(" "));
  t--;
}
