const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [nm, strS, ...posts] = fs.readFileSync(filePath).toString().trim().split("\n");

posts.forEach((ele) => {
  for (i = 0; i < strS.length; ) {
    for (j = 0; j < ele.length; j++) {
      if (strS[i] == ele[j]) i++;
    }
    return console.log(i == strS.length ? "true" : "false");
  }
});
