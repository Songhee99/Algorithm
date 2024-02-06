const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [satellite, ...map] = fs.readFileSync(filePath).toString().trim().split("\n");
let dataArr = [];
let result = new Array(9).fill(0);

map.forEach((ele) => {
  if (ele.search(/[1-9]/) == -1) return;
  let data = /[1-9]/.exec(ele);
  dataArr.push({ teamNum: data[0], distance: data.index });
});

dataArr.sort((a, b) => +b.distance - +a.distance);

let prevNum = dataArr[0].distance;
let ranking = 1;

dataArr.forEach((ele) => {
  if (prevNum == ele.distance) result[ele.teamNum - 1] = ranking;
  else {
    prevNum = ele.distance;
    ranking++;
    result[ele.teamNum - 1] = ranking;
  }
});

console.log(result.join("\n"));
