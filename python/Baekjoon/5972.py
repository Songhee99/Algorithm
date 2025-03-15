import sys
import heapq
input = sys.stdin.readline

n, m = map(int, input().split())
graph = [[] for _ in range(n + 1)]
for _ in range(m):
    a, b, c = map(int, input().split())
    graph[a].append((b, c))
    graph[b].append((a, c))

dist = [float("inf")] * (n + 1)
dist[1] = 0
pq = [(0, 1)]

while pq:
    count, num = heapq.heappop(pq)

    if count > dist[num]: continue

    for nNum, nCount in graph[num]:
        total = count + nCount
        if total < dist[nNum]:
            dist[nNum] = total
            heapq.heappush(pq, (total, nNum))

print(dist[n])
