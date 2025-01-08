from collections import deque

T = int(input())
result = []

rowDirection = []
colDirection = []
for col in range(3):
    rowDirection.append([(col, row) for row in range(3)])
    colDirection.append([(row, col) for row in range(3)])
selectedIdx = rowDirection + colDirection
selectedIdx.append([(0, 0), (1, 1), (2, 2)])
selectedIdx.append([(0, 2), (1, 1), (2, 0)])

def changeAlp(graph, idx):
    nGraph = [row[:] for row in graph]
    for (y, x) in idx:
        nGraph[y][x] = "T" if nGraph[y][x] == "H" else "H"
    return nGraph

for t in range(T):
    graph = [input().split() for _ in range(3)]
    visited = set()

    def bfs():
        queue = deque([(graph, 0)])

        while queue:
            curGraph, count = queue.popleft()
            curSeparation = [alp for row in curGraph for alp in row]

            if all(alp == "H" for alp in curSeparation) or all(alp == "T" for alp in curSeparation): return str(count)

            curStr = "".join(curSeparation)
            if curStr in visited: continue
            visited.add(curStr)

            for idx in selectedIdx:
                nGraph = changeAlp(curGraph, idx)
                queue.append((nGraph, count + 1))

        return "-1"

    total = bfs()
    result.append(total)

print("\n".join(result))
