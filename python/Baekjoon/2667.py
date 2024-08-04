import sys
from collections import deque

n = int(sys.stdin.readline().strip())
graph = []
graph.append([0] * (n + 2))
for _ in range(n):
    graph.append([0] + list(map(int, sys.stdin.readline().strip())) + [0])
graph.append([0] * (n + 2))

dy = [-1, 1, 0, 0]
dx = [0, 0, -1, 1]
count = 0
houses = []

def bfs(i, j):
    queue = deque([(i, j)])
    tmpHouses = 1

    while queue:
        y, x = queue.popleft()

        for d in range(4):
            ny = y + dy[d]
            nx = x + dx[d]

            if graph[ny][nx] == 0: continue
            graph[ny][nx] = 0
            queue.append((ny, nx))
            tmpHouses += 1
    global count
    count += 1
    houses.append(tmpHouses)

for i in range(n + 1):
    for j in range(n + 1):
        if graph[i][j] == 1:
            graph[i][j] = 0
            bfs(i, j)

print(count)
print("\n".join(list(map(str, sorted(houses)))))
