import sys
import heapq

n, m = map(int, sys.stdin.readline().strip().split())
nums = [-num for num in list(map(int, sys.stdin.readline().strip().split()))]
pq = []
heapq.heapify(nums)
heapq.heapify(pq)

for _ in range(n):
    if len(pq) < m: heapq.heappush(pq, -heapq.heappop(nums))
    else:
        prev = heapq.heappop(pq)
        next = -heapq.heappop(nums)
        heapq.heappush(pq, prev + next)

print(max(pq))