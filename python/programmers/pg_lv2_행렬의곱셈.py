def solution(arr1, arr2):    
    w = len(arr2[0])
    h = len(arr1)
    n = len(arr2)
    graph = [[0] * w for _ in range(h)]
    
    def calc(i, j):
        total = 0
        for k in range(n):
            total += (arr1[i][k] * arr2[k][j])
        return total
    
    for i in range(h):
        for j in range(w):
            graph[i][j] = calc(i, j)
        
    return graph