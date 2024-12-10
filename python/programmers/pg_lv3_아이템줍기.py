from collections import deque

def solution(rectangle, characterX, characterY, itemX, itemY):
    graph = [[0] * 101 for _ in range(101)]
    
    for x1, y1, x2, y2 in rectangle:
        x1, y1, x2, y2 = x1 * 2, y1 * 2, x2 * 2, y2 * 2
        
        for y in range(y1, y2 + 1):
            for x in range(x1, x2 + 1):
                if x > x1 and x < x2 and y > y1 and y < y2: graph[y][x] = 1
                elif graph[y][x] != 1: graph[y][x] = 2
                
    dy = [-1, 1, 0, 0]
    dx = [0, 0, -1, 1]
    
    def bfs(characterY, characterX):
        queue = deque([(characterY, characterX, 1)])
        
        while queue:
            curY, curX, count = queue.popleft()
            
            for d in range(4):
                nY = curY + dy[d]
                nX = curX + dx[d]
                
                if nY == itemY and nX == itemX: return count // 2
                if nY < 0 or nY > 100 or nX < 0 or nX > 100: continue
                if graph[nY][nX] == 2:
                    graph[nY][nX] = -1
                    queue.append((nY, nX, count + 1))
                
    itemX, itemY = itemX * 2, itemY * 2
    return bfs(characterY * 2, characterX * 2)