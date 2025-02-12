import sys

n, m, r = map(int, sys.stdin.readline().strip().split())
graph = [list(sys.stdin.readline().strip().split()) for _ in range(n)]
result = []

layers = min(n, m) // 2

def moveGraph(idx):
    layer = []

    for uX in range(idx, m - 1 - idx):
        layer.append(graph[idx][uX])

    for rY in range(idx, n - 1 - idx):
        layer.append(graph[rY][m - 1 - idx])

    for dX in range(m - 1 - idx, idx, -1):
        layer.append(graph[n - 1 - idx][dX])

    for lY in range(n - 1 - idx, idx, -1):
        layer.append(graph[lY][idx])

    rotation = r % len(layer)
    nGraph = layer[rotation:] + layer[:rotation]

    nIdx = 0
    for uX in range(idx, m - 1 - idx):
        graph[idx][uX] = nGraph[nIdx]
        nIdx += 1

    for rY in range(idx, n - 1 - idx):
        graph[rY][m - 1 - idx] = nGraph[nIdx]
        nIdx += 1

    for dX in range(m - 1 - idx, idx, -1):
        graph[n - 1 - idx][dX] = nGraph[nIdx]
        nIdx += 1

    for lY in range(n - 1 - idx, idx, -1):
        graph[lY][idx] = nGraph[nIdx]
        nIdx += 1

for idx in range(layers):
    moveGraph(idx)

for row in graph:
    result.append(" ".join(row))

print("\n".join(result))
