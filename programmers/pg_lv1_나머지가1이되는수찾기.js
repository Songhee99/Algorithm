function solution(n) {
  let newN = n - 1;

  if (newN % 2 == 0) return 2;
  for (i = 3; ; i += 2) {
    if (newN % i == 0) return i;
  }
}
