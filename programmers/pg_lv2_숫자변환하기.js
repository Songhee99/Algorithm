function solution(x, y, n) {
  if (x == y) return 0;

  const visited = new Array(y + 1).fill(false);
  const queue = [];
  let head = 0;

  const bfs = (i) => {
    queue.push([i, 0]);
    visited[i] = true;

    while (queue.length > head) {
      const [x, count] = queue[head++];
      const dx = [x * 3, x * 2, x + n];

      for (let d = 0; d < 3; d++) {
        const nx = dx[d];

        if (nx == y) return count + 1;

        if (!visited[nx] && nx < y) {
          visited[nx] = true;
          queue.push([nx, count + 1]);
        }
      }
    }
    return -1;
  };
  return bfs(x);
}
