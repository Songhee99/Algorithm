function solution(n, computers) {
  const graph = Array.from({ length: n }, () => []);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i == j) continue;
      if (computers[i][j] == 1) graph[i].push(j);
    }
  }
  let count = 0;
  const visited = Array.from({ length: n }, () => false);

  const dfs = (k) => {
    visited[k] = true;

    graph[k].forEach((ele) => {
      if (!visited[ele]) dfs(ele);
    });
  };

  for (let k = 0; k < n; k++) {
    if (!visited[k]) {
      dfs(k);
      count++;
    }
  }

  return count;
}
