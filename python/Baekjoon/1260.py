from collections import deque

n, m, v = map(int, input().split())
graph = [[] for i in range(n+1)]
for i in range(m):
    a, b = map(int, input().split())
    graph[a].append(b)
    graph[b].append(a)
for j in graph:
    j.sort()
visited = [False] * (n + 1)
dfsResult = []
bfsResult = []

def dfs(graph, v, visited):
    visited[v] = True
    dfsResult.append(v)
    for i in graph[v]:
        if not visited[i]: dfs(graph, i, visited)

def bfs(graph, v, visited):
    queue = deque()
    queue.append(v)
    visited[v] = True
    while queue:
        cur = queue.popleft()
        bfsResult.append(cur)
        for i in graph[cur]:
            if not visited[i]:
                queue.append(i)
                visited[i] = True

dfs(graph, v, visited)
visited = [False] * (n + 1)
bfs(graph, v, visited)

print(" ".join(map(str, dfsResult)))
print(" ".join(map(str, bfsResult)))
