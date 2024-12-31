import sys
import heapq

n = int(sys.stdin.readline().strip())
m = int(sys.stdin.readline().strip())
graph = [[] for _ in range(n)]
for _ in range(m):
    a, b, cost = map(int, sys.stdin.readline().strip().split())
    graph[a - 1].append((cost, b - 1))
    graph[b - 1].append((cost, a - 1))

pq = [(0, 0)]
visited = [False] * n
total = 0

while pq:
    cost, node = heapq.heappop(pq)
    if visited[node]: continue

    visited[node] = True
    total += cost

    for (nCost, nNode) in graph[node]:
        if not visited[nNode]:
            heapq.heappush(pq, (nCost, nNode))

print(total)
