function solution(n) {
  let count = 1;
  let half = Math.ceil(n / 2);

  for (i = 0; i < half - 1; i++) {
    let k = half - i;
    let t = half - 2 - i;
    let sumOne = k ** 2 + k;

    while (t >= 0) {
      let sumTwo = t ** 2 + t;
      if (2 * n - sumOne == -1 * sumTwo) {
        count++;
        break;
      }
      t--;
    }
  }

  return count;
}
