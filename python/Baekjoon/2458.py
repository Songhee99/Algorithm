import sys
from collections import deque

n, m = list(map(int, sys.stdin.readline().strip().split()))
bigGraph = [[] for _ in range(n)]
smallGraph = [[] for _ in range(n)]
for _ in range(m):
    a, b = list(map(int, sys.stdin.readline().strip().split()))
    bigGraph[a - 1].append(b - 1)
    smallGraph[b - 1].append(a - 1)
def bfs(i, graph):
    queue = deque([i])
    visited = [False] * n
    visited[i] = True
    count = 0

    while queue:
        num = queue.popleft()

        for k in graph[num]:
            if not visited[k]:
                visited[k] = True
                queue.append(k)
                count += 1
    return count

result = 0

for i in range(n):
    big = bfs(i, bigGraph)
    small = bfs(i, smallGraph)

    if big + small == n - 1: result += 1

print(result)