function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;
  const graph = [new Array(m + 2).fill(0)];
  maps.forEach((ele) => {
    graph.push([0, ...ele, 0]);
  });
  graph.push(new Array(m + 2).fill(0));

  const dy = [-1, 1, 0, 0];
  const dx = [0, 0, -1, 1];
  const queue = [];
  let head = 0;

  const bfs = (i, j) => {
    queue.push([i, j, 1]);
    graph[i][j] = 0;

    while (queue.length > head) {
      const [y, x, count] = queue[head++];

      for (d = 0; d < 4; d++) {
        const ny = y + dy[d];
        const nx = x + dx[d];

        if (ny == n && nx == m) return count + 1;

        if (graph[ny][nx] == 1) {
          queue.push([ny, nx, count + 1]);
          graph[ny][nx] = 0;
        }
      }
    }
    return -1;
  };

  return bfs(1, 1);
}
