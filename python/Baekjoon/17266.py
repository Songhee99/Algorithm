import math
import sys
input = sys.stdin.readline

n = int(input())
m = int(input())
xs = list(map(int, input().split()))
result = xs[0]

if m == 1:
    print(max(result, n - xs[0]))
    sys.exit()

for (idx, x) in enumerate(xs[:-1]):
    result = max(result, math.ceil((xs[idx + 1] - x) / 2))

result = max(result, n - xs[-1])

print(result)
