import sys
sys.setrecursionlimit(10**6)

n, w = map(int, sys.stdin.readline().strip().split())
graph = [[] for _ in range(n + 1)]
for _ in range(n - 1):
    u, v = map(int, sys.stdin.readline().strip().split())
    graph[u].append(v)
    graph[v].append(u)

visited = [False] * (n + 1)
total = 0
count = 0

def dfs(i, water):
    global count
    global total
    visited[i] = True
    tmp = []

    for j in graph[i]:
        if not visited[j]: tmp.append(j)

    if len(tmp) == 0:
        count += 1
        total += water
        return
    else:
        nextWater = water / len(tmp)
        for k in tmp:
            dfs(k, nextWater)

dfs(1, w)

print(total / count)
