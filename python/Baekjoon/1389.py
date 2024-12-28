import sys

n, m = list(map(int, sys.stdin.readline().strip().split()))
graph = [[float("inf")] * (n + 1) for _ in range(n + 1)]
for i in range(1, n + 1):
    graph[i][i] = 0
for _ in range(m):
    a, b = list(map(int, sys.stdin.readline().strip().split()))
    graph[a][b] = 1
    graph[b][a] = 1

for k in range(1, n + 1):
    for i in range(1, n + 1):
        for j in range(i + 1, n + 1):
            graph[i][j] = min(graph[i][j], graph[i][k] + graph[k][j])
            graph[j][i] = graph[i][j]

result = [0, float("inf")]
for i in range(1, n + 1):
    curSum = sum(graph[i][1:])
    if curSum < result[1]: result = [i, curSum]

print(result[0])