function solution(n) {
  let 수박 = "수박".repeat(Math.ceil(n / 2));
  if (n % 2 == 1) return 수박.slice(0, -1);
  return 수박;
}
