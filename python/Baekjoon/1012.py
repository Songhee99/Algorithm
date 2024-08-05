import sys
from collections import deque

t = int(sys.stdin.readline().strip())
for _ in range(t):
    m, n, k = map(int, sys.stdin.readline().strip().split())
    baechu = deque()
    graph = [[0] * m for _ in range(n)]
    for _ in range(k):
        x, y = map(int, sys.stdin.readline().strip().split())
        graph[y][x] = 1
        baechu.append((y, x))

    dy = [-1, 1, 0, 0]
    dx = [0, 0, -1, 1]
    visited = [[False] * m for _ in range(n)]
    count = 0

    def bfs(i, j):
        queue = deque([(i, j)])

        while queue:
            y, x = queue.popleft()
            for d in range(4):
                ny = y + dy[d]
                nx = x + dx[d]

                if nx < 0 or ny < 0 or nx >= m or ny >= n: continue
                if graph[ny][nx] == 0: continue
                queue.append((ny, nx))
                graph[ny][nx] = 0
        global count
        count += 1

    for i, j in baechu:
        if graph[i][j] == 1: bfs(i, j)

    print(count)