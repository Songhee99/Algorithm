let numArr = Array(10000)
  .fill()
  .map((v, i) => i + 1);
let sum = 0;

const d = (num) => {
  sum = 0;
  for (let i = 0; i < String(num).length; i++) {
    sum += +String(num).slice(i, i + 1);
  }
  sum += num;
  if (numArr.indexOf(sum) != -1) numArr.splice(numArr.indexOf(sum), 1);
};

let selfNum = numArr[0];
for (let j = selfNum; j < 10000; ) {
  d(j);
  selfNum = numArr[j++];
}
console.log(numArr.join("\n"));
