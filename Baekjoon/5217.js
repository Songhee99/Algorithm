const fs = require("fs");
const filePath = process.platform == "linux" ? "/dev/stdin" : "./input.txt";
let [t, ...nums] = fs.readFileSync(filePath).toString().trim().split("\n");

nums.forEach((ele) => {
  let result = [];
  for (i = 1; i < Math.ceil(ele / 2); i++) {
    let partner = ele - i;
    if (partner == i) continue;
    result.push(i + " " + partner);
  }
  result.length == 0 ? console.log(`Pairs for ${ele}:`) : console.log(`Pairs for ${ele}: ${result.join(", ")}`);
});
