function solution(A, B) {
  var answer = 0;

  A.sort((a, b) => {
    //숫자 오름차순
    return a - b;
  });

  B.sort((a, b) => {
    //숫자 내림차순
    return b - a;
  });

  for (i = 0; i < A.length; i++) {
    answer += A[i] * B[i];
  }

  return answer;
}
