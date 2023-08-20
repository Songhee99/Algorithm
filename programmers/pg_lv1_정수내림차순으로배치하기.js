function solution(n) {
  let nReverseStr = n
    .toString()
    .split("")
    .sort((a, b) => b - a)
    .join("");
  return +nReverseStr;
}
