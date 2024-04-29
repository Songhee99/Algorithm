const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
let [curHour, curMin, curSec] = input[0].split(":");
let [targetHour, targetMin, targetSec] = input[1].split(":");
let result = "";

let sec = +targetSec - +curSec;
if (sec < 0) {
  targetMin = +targetMin - 1;
  sec += 60;
}

result += `:${sec.toString().length < 2 ? "0" + sec : sec}`;

let min = +targetMin - +curMin;
if (min < 0) {
  targetHour = +targetHour - 1;
  min += 60;
}

result = `:${min.toString().length < 2 ? "0" + min : min}` + result;

let hour = +targetHour - +curHour;
if (hour < 0) hour += 24;

result = `${hour.toString().length < 2 ? "0" + hour : hour}` + result;

console.log(result);
