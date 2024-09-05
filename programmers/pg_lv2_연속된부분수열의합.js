function solution(sequence, k) {
  const n = sequence.length;
  let result = [];
  let start = 0;
  let end = 0;
  let sum = 0;

  while (start <= end && end <= n) {
    if (sum < k) sum += sequence[end++];
    else if (sum > k) sum -= sequence[start++];
    else if (sum == k) {
      if (end - start == 1) return [start, start];
      else {
        const tmpResult = [start, end - 1];

        if (
          result.length == 0 ||
          tmpResult[1] - tmpResult[0] < result[1] - result[0]
        )
          result = tmpResult;
        sum += sequence[end++];
      }
    }
  }
  return result;
}
