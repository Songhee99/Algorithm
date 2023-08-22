function solution(d, budget) {
  let count = 0;

  d = d.sort((a, b) => a - b);
  for (i = 0; i < d.length; i++) {
    if (budget - d[i] >= 0) {
      budget = budget - d[i];
      count++;
    } else return count;
  }
  return count;
}
