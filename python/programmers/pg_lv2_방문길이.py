def solution(dirs):
    result = 0
    visited = set()
    y, x = 0, 0
    
    for alp in dirs:
        ny, nx = y, x
        
        if alp == "U": ny = y - 1
        elif alp == "D": ny = y + 1
        elif alp == "R": nx = x + 1
        elif alp == "L": nx = x - 1
        
        if ny < -5 or ny > 5 or nx < -5 or nx > 5 : continue
        
        if not ((y, x), (ny, nx)) in visited:
            visited.add(((y, x), (ny, nx)))
            visited.add(((ny, nx), (y, x)))
            result += 1
        
        y, x = ny, nx

    return result