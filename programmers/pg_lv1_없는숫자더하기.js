function solution(numbers) {
  let oneToNine = 45;
  return oneToNine - numbers.reduce((acc, cur) => acc + cur);
}
