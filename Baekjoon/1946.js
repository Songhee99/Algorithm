const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [t, ...cases] = fs.readFileSync(filePath).toString().trim().split("\n");

const makevolunteerCase = () => {
  let volunteerCase = [];
  for (k = 1; k <= +cases[0]; k++) {
    volunteerCase.push(cases[k].split(" "));
  }
  cases.splice(0, +cases[0] + 1);
  return volunteerCase.sort((a, b) => a[0] - b[0]);
};

for (i = 0; i < t; i++) {
  let volunteerCase = makevolunteerCase();
  let doc = 0;
  let interview = +volunteerCase[0][1];
  let pass = [];
  let finalPass = 1;

  for (j = 1; j < volunteerCase.length; j++) {
    if (+volunteerCase[j][1] < interview) {
      pass.push(volunteerCase[j]);
      interview = +volunteerCase[j][1];
    }
    if (+volunteerCase[j][1] == 1) doc = +volunteerCase[j][0];
  }
  pass.forEach((ele) => {
    if (+ele[0] <= doc) finalPass++;
  });

  console.log(finalPass);
}
