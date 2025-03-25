import sys
from collections import deque

h, w = map(int, sys.stdin.readline().strip().split())
graph = [list(map(int, sys.stdin.readline().strip().split())) for _ in range(h)]
time = 0
lastCount = 0

dy = [-1, 1, 0, 0]
dx = [0, 0, -1, 1]

def bfs(i, j):
    queue = deque([(i, j)])
    visited = [[False] * w for _ in range(h)]
    visited[i][j] = True
    count = 0

    while queue:
        y, x = queue.popleft()

        for d in range(4):
            ny = y + dy[d]
            nx = x + dx[d]

            if not visited[ny][nx]:
                visited[ny][nx] = True
                if graph[ny][nx] == 1:
                    graph[ny][nx] = 2
                    count += 1
                else: queue.append((ny, nx))
    return count

while True:
    count = bfs(0, 0)

    if count == 0: break
    else:
        time += 1
        lastCount = count

print(time)
print(lastCount)