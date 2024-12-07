from collections import deque

def solution(n, wires):
    tree = [[] for _ in range(n + 1)]
    result = float("inf")
    
    for (a, b) in wires:
        tree[a].append(b)
        tree[b].append(a)
            
    def bfs(num, cutNum):
        queue = deque([num])
        visited = [0 for _ in range(n + 1)]
        visited[num] = 1
        visited[cutNum] = 1
        count = 0
        
        while queue:
            curNum = queue.popleft()
            
            for k in tree[curNum]:
                if visited[k] == 0:
                    visited[k] = 1
                    queue.append(k)
                    count += 1
        return count
    
    completion = dict()
    
    for i in range(1, n + 1):
        for j in tree[i]:
            if completion.get(str(i)) and completion.get(str(i)) in str(j): continue
            
            completion[str(i)] = str(j)
            completion[str(j)] = str(i)
                        
            iCount = bfs(i, j)
            jCount = bfs(j, i)
            interval = abs(iCount - jCount)
            
            if interval == 0: return 0
            else: result = min(result, interval)
    return result