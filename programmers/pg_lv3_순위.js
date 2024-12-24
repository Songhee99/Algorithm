function solution(n, results) {
  let result = 0;
  const graph = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(0));

  for (const [win, lose] of results) {
    graph[win][lose] = 1;
  }

  for (let k = 1; k <= n; k++) {
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        if (graph[i][k] && graph[k][j]) graph[i][j] = 1;
      }
    }
  }

  for (let i = 1; i <= n; i++) {
    let count = 0;

    for (let j = 1; j <= n; j++) {
      count += graph[i][j] + graph[j][i];
    }

    if (count == n - 1) result += 1;
  }

  return result;
}
