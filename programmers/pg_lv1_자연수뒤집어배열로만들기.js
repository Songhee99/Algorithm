function solution(n) {
  return n
    .toString()
    .split("")
    .map((ele) => +ele)
    .reverse();
}
