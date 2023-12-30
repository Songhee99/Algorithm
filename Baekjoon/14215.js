const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const sides = fs.readFileSync(filePath).toString().trim().split(" ");

let sortSides = sides.map((v) => +v).sort((a, b) => a - b);

if (sortSides[0] + sortSides[1] <= sortSides[2]) return console.log((sortSides[0] + sortSides[1]) * 2 - 1);
return console.log(sortSides.reduce((acc, cur) => acc + cur));
