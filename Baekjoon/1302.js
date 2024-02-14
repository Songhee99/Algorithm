const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, ...books] = fs.readFileSync(filePath).toString().trim().split("\n");
let maxCount = 0;

if (+n == 1) return console.log(books[0]);

books.sort();

let bookName = books[0];

for (i = 0; i < books.length - 1; ) {
  let count = 0;

  while (books[i] == books[i + 1]) {
    count++;
    i++;
  }

  if (count > maxCount) {
    maxCount = count;
    bookName = books[i];
  }
  i++;
}

console.log(bookName);
