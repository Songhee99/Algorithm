from collections import deque

def solution(maps):
    n = len(maps)
    m = len(maps[0])
    
    dy = [-1, 1, 0, 0]
    dx = [0, 0, -1, 1]
    visited = [[False for _ in range(m)] for _ in range(n)]
    
    def bfs(i, j, c):
        queue = deque([(i, j, c)])
        visited[i][j] = True
        
        while queue:
            y, x, count = queue.popleft()
            
            for d in range(4):
                ny = y + dy[d]
                nx = x + dx[d]
                
                if ny == n - 1 and nx == m - 1: return count + 1
                if ny < 0 or nx < 0 or ny >= n or nx >= m or maps[ny][nx] == 0: continue
                if not visited[ny][nx]:
                    visited[ny][nx] = True
                    queue.append((ny, nx, count + 1))
        return -1
    
    return bfs(0, 0, 1)