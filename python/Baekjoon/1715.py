import sys
import heapq

result = 0
n = int(sys.stdin.readline().strip())
pq = [int(sys.stdin.readline().strip()) for _ in range(n)]
heapq.heapify(pq)

while len(pq) > 1:
    prev = heapq.heappop(pq)
    next = heapq.heappop(pq)

    total = prev + next
    heapq.heappush(pq, total)
    result += total

print(result)
