import sys

n, m = list(map(int, sys.stdin.readline().strip().split()))
graph = [list(map(int, sys.stdin.readline().strip().split())) for _ in range(m)]
graph.sort(key = lambda x: x[2])
parent = list(range(n + 1))
rank = [0] * (n + 1)

def find(x):
    if x != parent[x]: parent[x] = find(parent[x])
    return parent[x]

def union(rootA, rootB):
    if rank[rootA] > rank[rootB]: parent[rootB] = rootA
    elif rank[rootB] > rank[rootA]: parent[rootA] = rootB
    else:
        parent[rootB] = rootA
        rank[rootA] += 1

total = 0
for (a, b, cost) in graph:
    total += cost
    rootA = find(a)
    rootB = find(b)

    if rootA != rootB:
        union(rootA, rootB)
        total -= cost

curParent = parent[1]
for i in range(2, n + 1):
    if parent[i] != curParent:
        rootCur = find(curParent)
        rootI = find(parent[i])

        if rootI != rootCur:
            print(-1)
            sys.exit()

print(total)
