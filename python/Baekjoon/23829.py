import sys
import bisect
input = sys.stdin.readline

n, q = map(int, input().split())
ps = list(map(int, input().split()))
xs = [int(input()) for _ in range(q)]

ps.sort()

sumList = [0] * (n + 1)
for i in range(1, n + 1):
    sumList[i] = sumList[i - 1] + ps[i - 1]

for x in xs:
    count = bisect.bisect_left(ps, x)
    prev = x * count - sumList[count]
    next = (sumList[n] - sumList[count]) - x * (n - count)
    print(prev + next)
