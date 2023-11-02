const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let octal = fs.readFileSync(filePath).toString().trim();
let binary = "";

if (octal != 0) {
  for (i = 0; i < octal.length; i++) {
    let num = octal.slice(i, i + 1);
    if (num > 7) continue;
    let newNum = parseInt(num / 2);
    binary += String(parseInt(newNum / 2)) + String(newNum % 2) + String(num % 2);
  }
}

if (!binary) {
  console.log(0);
} else {
  while (binary.charAt(0) == 0) {
    binary = binary.substring(1);
  }
  console.log(binary);
}
