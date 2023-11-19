const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();
let change = 1000 - input;
let count = 0;

let hundreds = parseInt(change / 100);
let tens = parseInt((change - 100 * hundreds) / 10);
let units = change - 100 * hundreds - 10 * tens;
count += parseInt(hundreds / 5) + (hundreds % 5) + parseInt(tens / 5) + (tens % 5) + parseInt(units / 5) + (units % 5);

console.log(count);
