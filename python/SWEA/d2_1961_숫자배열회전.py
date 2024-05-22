T = int(input())

for t in range(1, T + 1):
    n = int(input())
    totalGraph = [[] for i in range(n)]
    graph = []
    for i in range(n):
        graph.append(list(input().split()))

    def turn_90(graph):
        for j in range(n):
            tmpStr = ""
            for k in range(n - 1, -1, -1):
                tmpStr += graph[k][j]
            totalGraph[j].append(tmpStr)

    def turn_180(graph):
        for j in range(n - 1, -1, -1):
            tmpStr = ""
            for k in range(n - 1, -1, -1):
                tmpStr += graph[j][k]
            totalGraph[n - 1 - j].append(tmpStr)

    def turn_270(graph):
        for j in range(n - 1, -1, -1):
            tmpStr = ""
            for k in range(n):
                tmpStr += graph[k][j]
            totalGraph[n - 1 - j].append(tmpStr)

    turn_90(graph)
    turn_180(graph)
    turn_270(graph)

    print(f"#{t}")
    for i in range(n):
        print(" ".join(totalGraph[i]))
