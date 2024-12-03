function solution(ability) {
  const students = ability.length;
  const sports = ability[0].length;
  let result = 0;

  const visited = Array.from({ length: students }, () => false);
  const dfs = (count, total) => {
    if (count == sports) return (result = Math.max(result, total));

    for (let i = 0; i < students; i++) {
      if (!visited[i]) {
        visited[i] = true;
        dfs(count + 1, total + ability[i][count]);
        visited[i] = false;
      }
    }
  };

  dfs(0, 0);
  return result;
}
