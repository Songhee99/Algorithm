import sys

n = int(sys.stdin.readline().strip())
walls = [list(map(int, sys.stdin.readline().strip().split())) for _ in range(n)]
walls.sort(key = lambda x: x[0])

leftMax = [0] * n
rightMax = [0] * n

for i in range(n):
    if i == 0:
        leftMax[0] = walls[0][1]
        rightMax[-1] = walls[-1][1]
    else:
        leftMax[i] = max(leftMax[i - 1], walls[i][1])
        rightMax[n - 1 - i] = max(rightMax[n - i], walls[n - 1 - i][1])

sum = 0
minNum = min(leftMax[0], rightMax[0])

for i in range(1, n):
    curMinNum = min(leftMax[i], rightMax[i])

    if minNum <= curMinNum: sum += (walls[i][0] - walls[i - 1][0]) * minNum
    else:
        sum += minNum
        sum += (walls[i][0] - walls[i - 1][0] - 1) * curMinNum

    minNum = curMinNum
sum += minNum

print(sum)
