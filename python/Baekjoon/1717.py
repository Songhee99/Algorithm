import sys

n, m = map(int, sys.stdin.readline().strip().split())
input = [list(map(int, sys.stdin.readline().strip().split())) for _ in range(m)]
parent = [i for i in range(n + 1)]
rank = [0] * (n + 1)
result = []

def find(x):
    if x != parent[x]: parent[x] = find(parent[x])
    return parent[x]

def union(rootA, rootB):
    if rank[rootA] > rank[rootB]: parent[rootB] = rootA
    elif rank[rootA] < rank[rootB]: parent[rootA] = rootB
    else:
        parent[rootB] = rootA
        rank[rootA] += 1

for (calc, a, b) in input:
    rootA = find(a)
    rootB = find(b)
    
    if rootA == rootB:
        if calc == 1: result.append("YES")
    else:
        if calc == 1: result.append("NO")
        else: union(rootA, rootB)

print("\n".join(result))