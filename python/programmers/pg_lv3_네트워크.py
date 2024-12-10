def solution(n, computers):
    n = len(computers)
    count = 0
    graph = []
    for (idx1, connection) in enumerate(computers):
        tmpList = []
        for (idx2, i) in enumerate(connection):
            if idx1 == idx2: continue
            elif i == 1: tmpList.append(idx2)
        graph.append(tmpList)
        
    visited = [False for _ in range(n)]
    def dfs(idx):
        visited[idx] = True
        for i in graph[idx]:
            if not visited[i]: dfs(i)

    for idx in range(n):
        if not visited[idx]:
            count += 1
            dfs(idx)
    
    return count