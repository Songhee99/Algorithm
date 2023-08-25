function solution(k, m, score) {
  let result = 0;

  score.sort((a, b) => b - a);
  while (score.length >= m) {
    result += score.splice(0, m).splice(-1, 1) * m;
  }
  return result;
}

//시간초과
