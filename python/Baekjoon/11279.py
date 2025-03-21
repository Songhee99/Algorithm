import sys
import heapq

n = int(sys.stdin.readline().strip())
xs = [int(sys.stdin.readline().strip()) for _ in range(n)]
result = []
pq = []

for i in xs:
    if i == 0:
        if len(pq) > 0: result.append(str(-heapq.heappop(pq)))
        else: result.append("0")
    else: heapq.heappush(pq, -i)

print("\n".join(result))
