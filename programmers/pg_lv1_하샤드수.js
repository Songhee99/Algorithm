function solution(x) {
  let xSum = x
    .toString()
    .split("")
    .reduce((acc, cur) => +acc + +cur);
  if (x % xSum == 0) return true;
  return false;
}
