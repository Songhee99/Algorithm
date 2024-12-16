import sys

n = int(sys.stdin.readline().strip())

if n == 1:
    print(1)
    sys.exit()

dp = [[0, 0] for _ in range(n)]
dp[0] = [0, 1]
dp[1] = [1, 0]

for i in range(2, n):
    dp[i][0] = dp[i - 1][0] + dp[i - 1][1]
    dp[i][1] = dp[i - 1][0]


print(dp[n - 1][0] + dp[n - 1][1])