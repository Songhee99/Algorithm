import sys
import heapq

n = int(sys.stdin.readline().strip())
pq = []
for _ in range(n):
    nums = list(map(int, sys.stdin.readline().strip().split()))
    for num in nums:
        if len(pq) < n: heapq.heappush(pq, num)
        elif pq[0] < num: heapq.heapreplace(pq, num)

print(pq[0])