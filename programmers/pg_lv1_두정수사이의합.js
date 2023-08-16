function solution(a, b) {
  let result = 0;

  if (a == b) return a;
  if (b - a < 0) {
    let tmp = a;
    a = b;
    b = tmp;
  }

  for (i = a; i <= b; i++) result += i;

  return result;
}

//가우스로 풀 수 있음
