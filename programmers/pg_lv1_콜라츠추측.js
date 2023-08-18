function solution(num) {
  let count = 0;

  while (num != 1 && count < 501) {
    if (num % 2 == 1) {
      num = num * 3 + 1;
      count++;
    }
    if (num % 2 == 0) {
      num = num / 2;
      count++;
    }
  }
  if (count > 500) return -1;
  return count;
}
