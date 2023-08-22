function solution(left, right) {
  let sum = 0;

  for (i = left; i <= right; i++) {
    let count = 1;
    for (j = 1; j <= i / 2; j++) {
      if (i % j == 0) count++;
    }
    if (count % 2 == 0) sum += i;
    else sum -= i;
  }
  return sum;
}

//제곱근으로도 풀 수 잇음
