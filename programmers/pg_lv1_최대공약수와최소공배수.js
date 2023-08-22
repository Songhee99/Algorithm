function solution(n, m) {
  let max = 1;

  for (i = n; i > 0; i--) {
    if (n % i == 0 && m % i == 0) {
      max *= i;
      n = n / i;
      m = m / i;
      return [max, max * n * m];
    }
  }

  return [max, max * n * m];
}
