const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, p, q] = fs.readFileSync(filePath).toString().trim().split(" ");

if (+n === 0) return console.log(1);

const resultMap = new Map();
resultMap.set(0, 1);

const serachNum = (n) => {
  const prevN = Math.floor(+n / +p);
  const nextN = Math.floor(+n / +q);

  if (!resultMap.has(prevN)) serachNum(prevN);
  if (!resultMap.has(nextN)) serachNum(nextN);

  const aN = resultMap.get(prevN) + resultMap.get(nextN);

  return resultMap.set(+n, aN);
};

serachNum(+n);
console.log(resultMap.get(+n));
