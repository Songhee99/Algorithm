import sys

n = int(sys.stdin.readline().strip())
m = int(sys.stdin.readline().strip())
edges = [list(map(int, sys.stdin.readline().strip().split())) for _ in range(m)]
edges.sort(key = lambda x: x[2])

parent = list(range(n + 1))
rank = [0] * (n + 1)

def find(x):
    if x != parent[x]: parent[x] = find(parent[x])
    return parent[x]

def union(rootA, rootB):
    if rank[rootA] > rank[rootB]: parent[rootB] = rootA
    elif rank[rootA] < rank[rootB]: parent[rootA] = rootB
    else:
        parent[rootB] = rootA
        rank[rootA] += 1

total = 0

for (a, b, cost) in edges:
    rootA = find(a)
    rootB = find(b)

    if rootA != rootB:
        union(rootA, rootB)
        total += cost

print(total)