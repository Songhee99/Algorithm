function solution(n, edge) {
  let result = 0;
  const graph = Array.from({ length: n + 1 }, () => []);
  for (const [a, b] of edge) {
    graph[a].push(b);
    graph[b].push(a);
  }

  const visited = Array.from({ length: n + 1 }, () => -1);
  const queue = [];
  let head = 0;
  let maxDist = 0;

  const bfs = (start) => {
    queue.push(start);
    visited[start] = 0;

    while (queue.length > head) {
      const i = queue[head++];

      for (const num of graph[i]) {
        if (visited[num] == -1) {
          queue.push(num);
          visited[num] = visited[i] + 1;

          if (maxDist == visited[num]) result += 1;
          else if (maxDist < visited[num]) {
            maxDist = visited[num];
            result = 1;
          }
        }
      }
    }
  };

  bfs(1);
  return result;
}
