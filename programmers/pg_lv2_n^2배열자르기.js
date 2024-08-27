function solution(n, left, right) {
  const result = [];

  for (let k = left; k <= right; k++) {
    const col = parseInt(k / n);
    const row = k % n;

    result.push(col < row ? row + 1 : col + 1);
  }
  return result;
}
