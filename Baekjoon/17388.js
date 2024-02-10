const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

let sum = input.reduce((prev, next) => +prev + +next);

if (sum >= 100) return console.log("OK");

if (+input[0] < +input[1] && +input[0] < +input[2]) console.log("Soongsil");
else if (+input[1] < +input[0] && +input[1] < +input[2]) console.log("Korea");
else if (+input[2] < +input[0] && +input[2] < +input[1]) console.log("Hanyang");
