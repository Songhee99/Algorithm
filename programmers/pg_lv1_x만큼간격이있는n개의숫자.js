function solution(x, n) {
  var answer = [];

  for (i = x; answer.length < n; i += x) {
    answer.push(i);
  }
  return answer;
}
