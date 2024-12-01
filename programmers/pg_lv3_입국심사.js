function solution(n, times) {
  let result = Infinity;
  times.sort((a, b) => a - b);

  let start = 0;
  let end = times[times.length - 1] * n;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    let count = 0;

    for (const person of times) {
      count += Math.floor(mid / person);
    }

    if (count >= n) end = mid - 1;
    else start = mid + 1;
  }
  return start;
}
