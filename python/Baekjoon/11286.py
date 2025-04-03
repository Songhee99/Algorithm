import sys
import heapq

result = []
n = int(sys.stdin.readline().strip())
pq = []

for _ in range(n):
    num = int(sys.stdin.readline().strip())

    if num == 0:
        if len(pq) == 0: result.append("0")
        else:
            absNum, curNum = heapq.heappop(pq)
            result.append(str(curNum))
    else: heapq.heappush(pq, (abs(num), num))

print("\n".join(result))
