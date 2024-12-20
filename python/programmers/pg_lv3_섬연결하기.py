def solution(n, costs):
    costs.sort(key = lambda x: x[2])
    parent = [i for i in range(n)]
    rank = [0] * n
    
    def find(x):
        if parent[x] != x: parent[x] = find(parent[x])
        return parent[x]

    def union(rootA, rootB):
        if rank[rootA] > rank[rootB]: parent[rootB] = rootA
        elif rank[rootA] < rank[rootB]: parent[rootA] = rootB
        else:
            parent[rootB] = rootA
            rank[rootA] += 1
                
    totalCost = 0
    for (a, b, cost) in costs:
        rootA = find(a)
        rootB = find(b)
        
        if rootA != rootB:
            union(rootA, rootB)
            totalCost += cost
    
    return totalCost