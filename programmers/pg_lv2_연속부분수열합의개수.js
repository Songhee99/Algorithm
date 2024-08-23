function solution(elements) {
  const n = elements.length;
  const sumSet = new Set();
  let count = 1;

  while (count <= n) {
    for (let i = 0; i < n; i++) {
      let tmpSum = 0;
      for (let j = 0; j < count; j++) {
        const tmpIdx = i + j >= n ? (i + j) % n : i + j;
        tmpSum += elements[tmpIdx];
      }
      sumSet.add(tmpSum);
    }
    count++;
  }

  return sumSet.size;
}
