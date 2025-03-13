import sys
import heapq
input = sys.stdin.readline

n, m, k = map(int, input().split())
scores = [list(map(int, input().split())) for _ in range(n)]
lines = []
for i in range(min(n, m)):
    d, h = scores[i]
    heapq.heappush(lines, (-d, -h, i, i))
result = 0

while True:
    d, h, l, i = heapq.heappop(lines)
    if i == k: break

    result += 1
    nIdx = i + m
    if nIdx >= n: continue
    nD, nH = scores[nIdx]
    heapq.heappush(lines, (-nD, -nH, l, nIdx))

print(result)