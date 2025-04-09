def solution(info, edges):
    result = 0
    graph = [[] for _ in range(len(info))]
    for parent, child in edges:
        graph[parent].append(child)

    def dfs(sheep, wolf, current, nextNode):
        nonlocal result
        
        if info[current] == 0: sheep += 1
        else: wolf += 1

        if wolf >= sheep: return

        result = max(result, sheep)

        nextNode.extend(graph[current])

        for (idx, node) in enumerate(nextNode):
            dfs(sheep, wolf, node, nextNode[:idx] + nextNode[idx+1:])

    dfs(0, 0, 0, [])
    return result
