function solution(price, money, count) {
  let sum = 0;
  for (i = 0; i < count; i++) {
    sum += price * (i + 1);
  }

  return sum - money < 0 ? 0 : sum - money;
}
