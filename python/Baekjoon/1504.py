import sys
import heapq

n, e = map(int, sys.stdin.readline().strip().split())
graph = [[] for _ in range(n + 1)]
for _ in range(e):
    a, b, c = map(int, sys.stdin.readline().strip().split())
    graph[a].append((b, c))
    graph[b].append((a, c))
u, v = map(int, sys.stdin.readline().strip().split())

def dijkstra(i):
    distList = [int(1e9)] * (n + 1)
    distList[i] = 0
    pq = [(0, i)]

    while pq:
        count, num = heapq.heappop(pq)

        for (next, curCount) in graph[num]:
            nCount = count + curCount
            if distList[next] > nCount:
                distList[next] = nCount
                heapq.heappush(pq, (nCount, next))

    return distList

fromOne = dijkstra(1)
fromU = dijkstra(u) if u != 1 else fromOne
fromV = dijkstra(v) if v != 1 else fromOne

uToV = fromOne[u] + fromU[v] + fromV[n]
vToU = fromOne[v] + fromV[u] + fromU[n]

result = min(uToV, vToU)
print(result if result < int(1e9) else -1)
