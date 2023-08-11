function solution(n, a, b) {
  let count = 1;

  while (b - a != 1) {
    if (a % 2 == 0) {
      a = a / 2;
    } else {
      a = (a + 1) / 2;
    }

    if (b % 2 == 0) {
      b = b / 2;
    } else {
      b = (b + 1) / 2;
    }

    count++;
  }

  return count;
}
