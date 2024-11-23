function solution(numbers, target) {
  const n = numbers.length;
  let result = 0;

  const dfs = (i, count) => {
    if (i == n) {
      if (count == target) result++;
      return;
    }

    dfs(i + 1, count + numbers[i]);
    dfs(i + 1, count - numbers[i]);
  };

  dfs(0, 0);
  return result;
}
