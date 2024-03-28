function solution(n, m, section) {
  let count = 1;
  let lastPoint = section[0] + m - 1;

  for (i = 1; i < section.length; i++) {
    if (section[i] > lastPoint) {
      count++;
      lastPoint = section[i] + m - 1;
    }
  }
  return count;
}
