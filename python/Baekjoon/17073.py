import sys

n, w = map(int, sys.stdin.readline().strip().split())
graph = [0] * (n + 1)
for _ in range(n - 1):
    u, v = map(int, sys.stdin.readline().strip().split())
    graph[u] += 1
    graph[v] += 1

graph[1] = 0
leaf = graph.count(1)

print(w / leaf)