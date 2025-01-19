from collections import deque

T = int(input())
result = []

destination = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]

def changeAlp(graph, dest):
    graphList = list(graph)
    for d in dest:
        graphList[d] = "T" if graphList[d] == "H" else "H"
    return "".join(graphList)


for _ in range(T):
    graph = "".join(["".join(input().split()) for _ in range(3)])
    visited = set()

    def bfs():
        queue = deque([(graph, 0)])

        while queue:
            nGraph, count = queue.popleft()
            if all(h == "H" for h in nGraph) or all(t == "T" for t in nGraph): return result.append(str(count))

            for d in destination:
                tmpGraph = changeAlp(nGraph, d)
                if tmpGraph not in visited:
                    visited.add(tmpGraph)
                    queue.append([tmpGraph, count + 1])
        result.append("-1")
    bfs()

print("\n".join(result))