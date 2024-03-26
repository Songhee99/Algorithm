// 1 2 3 4 5
// 2 1 2 3 2 4 2 5
// 3 3 1 1 2 2 4 4 5 5

function solution(answers) {
  let num1Arr = [1, 2, 3, 4, 5];
  let num2Arr = [2, 1, 2, 3, 2, 4, 2, 5];
  let num3Arr = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let scoreMap = new Map();
  let result = [];

  for (i = 0; i < 3; i++) {
    scoreMap.set(i + 1, 0);
  }

  answers.forEach((ele) => {
    let num1 = num1Arr.shift();
    let num2 = num2Arr.shift();
    let num3 = num3Arr.shift();

    if (ele == num1) scoreMap.set(1, scoreMap.get(1) + 1);
    if (ele == num2) scoreMap.set(2, scoreMap.get(2) + 1);
    if (ele == num3) scoreMap.set(3, scoreMap.get(3) + 1);

    num1Arr.push(num1);
    num2Arr.push(num2);
    num3Arr.push(num3);
  });
  let scoreArr = [...scoreMap].sort((a, b) => b[1] - a[1]);

  if (scoreArr[0][1] > scoreArr[1][1]) return [scoreArr[0][0]];
  else if (scoreArr[1][1] > scoreArr[2][1]) {
    result.push(scoreArr[0][0], scoreArr[1][0]);
    return result;
  } else {
    result.push(scoreArr[0][0], scoreArr[1][0], scoreArr[2][0]);
    return result;
  }
}
