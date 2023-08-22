function solution(n) {
  if (Math.sqrt(n) == parseInt(Math.sqrt(n))) return (Math.sqrt(n) + 1) ** 2;
  return -1;
}
