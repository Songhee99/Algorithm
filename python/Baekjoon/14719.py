import sys
h, w = map(int, sys.stdin.readline().split())
graph = list(map(int, sys.stdin.readline().split()))

leftMax = [0] * w
rightMax = [0] * w

for i in range(w):
    if i == 0: leftMax[0] = graph[0]
    else: leftMax[i] = max(leftMax[i - 1], graph[i])

for i in range(w - 1, -1, -1):
    if i == w - 1: rightMax[w - 1] = graph[w - 1]
    else: rightMax[i] = max(rightMax[i + 1], graph[i])

sum = 0
for i in range(w):
    sum += min(leftMax[i], rightMax[i]) - graph[i]

print(sum)
