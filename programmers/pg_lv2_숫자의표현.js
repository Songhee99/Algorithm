function solution(n) {
  let count = 0;
  let half = Math.ceil(n / 2);

  if (n % 2 != 0 && n != 1) count++;
  for (i = 1; i <= half; i += 2) {
    if (n % i == 0) count++;
  }
  return count;
}
