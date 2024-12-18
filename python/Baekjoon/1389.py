import sys
from collections import deque

n, m = list(map(int, sys.stdin.readline().strip().split()))
sumList = [0 for _ in range(n + 1)]
graph = [[] for _ in range(n + 1)]
for _ in range(m):
    a, b = list(map(int, sys.stdin.readline().strip().split()))
    graph[a].append(b)
    graph[b].append(a)

def bfs(i, j):
    queue = deque([(i, 0)])
    visited = [False] * (n + 1)
    visited[i] = True

    while queue:
        num, count = queue.popleft()
        if num == j: return count

        for k in graph[num]:
            if not visited[k]:
                visited[k] = True
                queue.append((k, count + 1))

for i in range(1, n):
    for j in range(i + 1, n + 1):
        count = bfs(i, j)
        sumList[i] += count
        sumList[j] += count

result = [0, float("inf")]
for (idx, curSum) in enumerate(sumList[1:]):
    if curSum < result[1]: result = [idx, curSum]

print(result[0] + 1)