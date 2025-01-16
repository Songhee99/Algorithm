import sys
from collections import deque

n, m = map(int, sys.stdin.readline().strip().split())
graph = [[1 for _ in range(m + 2)]]
for _ in range(n):
    line = [1] + list(map(int, sys.stdin.readline().strip().split())) + [1]
    graph.append(line)
graph.append([1 for _ in range(m + 2)])
h, w, sr, sc, fr, fc = map(int, sys.stdin.readline().strip().split())
result = -1

prefixSum = [[0] * (m + 2) for _ in range(n + 2)]
for i in range(1, n + 1):
    for j in range(1, m + 1):
        prefixSum[i][j] = graph[i][j] + prefixSum[i - 1][j] + prefixSum[i][j - 1] - prefixSum[i - 1][j  - 1]

def checkWall(y, x):
    fy = y + h - 1
    fx = x + w - 1

    if fy > n or fx > m: return False
    total = prefixSum[fy][fx] - prefixSum[y-1][fx] - prefixSum[fy][x - 1] + prefixSum[y - 1][x - 1]
    return True if total == 0 else False

dy = [-1, 1, 0, 0]
dx = [0, 0, -1, 1]
visited = [[False for _ in range(m + 2)] for _ in range(n + 2)]

def bfs():
    queue = deque([(sr, sc, 0)])
    visited[sr][sc] = True

    while queue:
        y, x, count = queue.popleft()

        if y == fr and x == fc: return count

        for d in range(4):
            ny = y + dy[d]
            nx = x + dx[d]

            if graph[ny][nx] != 1 and not visited[ny][nx]:
                visited[ny][nx] = True
                if checkWall(ny, nx): queue.append((ny, nx, count + 1))
    return -1

print(bfs())