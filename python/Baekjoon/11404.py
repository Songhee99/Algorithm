import sys

n = int(sys.stdin.readline().strip())
m = int(sys.stdin.readline().strip())
graph = [[float("inf")] * n for _ in range(n)]
for _ in range(m):
    a, b, cost = list(map(int, sys.stdin.readline().strip().split()))
    graph[a - 1][b - 1] = min(graph[a - 1][b - 1], cost)

for k in range(n):
    for i in range(n):
        for j in range(n):
            if i == j: continue
            graph[i][j] = min(graph[i][j], graph[i][k] + graph[k][j])

for i in graph:
    curStr = " ".join(map(str, i))
    print(curStr.replace("inf", "0"))