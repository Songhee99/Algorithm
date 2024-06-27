import sys
from collections import deque

n, m = map(int, sys.stdin.readline().strip().split())
graph = []
graph.append([0] * (m + 2))
for _ in range(n):
    graph.append([0] + [int(i) for i in sys.stdin.readline().strip()] + [0])
graph.append([0] * (m + 2))

dx = [0, 0, -1, 1]
dy = [-1, 1, 0, 0]
visited = [[False] * (m + 2) for _ in range(n + 2)]

def bfs():
    queue = deque([(1, 1)])
    visited[1][1] = True

    while queue:
        y, x = queue.popleft()
        for d in range(4):
            ny = y + dy[d]
            nx = x + dx[d]

            if nx == m and ny == n:
                print(graph[y][x] + 1)
                return
            if graph[ny][nx] == 0: continue
            if graph[ny][nx] == 1 and not visited[ny][nx]:
                queue.append((ny, nx))
                graph[ny][nx] = graph[y][x] + 1
                visited[ny][nx] = True

bfs()