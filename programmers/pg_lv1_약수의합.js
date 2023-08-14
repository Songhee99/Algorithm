function solution(n) {
  let half = Math.ceil(n / 2);
  let sum = n;

  if (n == 0) return 0;
  if (n == 1) return 1;

  for (i = 1; i <= half; i++) {
    if (n % i == 0) sum += i;
  }
  return sum;
}
