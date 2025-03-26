import sys
input = sys.stdin.readline

h, n = map(int, input().split())
if h == n:
    print(1)
    sys.exit()
elif h > n: h, n = n, h

dp = [[0] * (n + 1) for _ in range(n + 1)]
dp[h][h] = 1

for y in range(h, n + 1):
    for x in range(h, n + 1):
        if x > y: continue

        if y > h: dp[y][x] += dp[y - 1][x]
        if x > h: dp[y][x] += dp[y][x - 1]

print(dp[n][n])
