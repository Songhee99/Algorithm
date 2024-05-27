from collections import deque

def solution(numbers, target):
    queue = deque()
    result = 0

    def bfs():
        queue.append([numbers[0], 0])
        queue.append([-numbers[0], 0])
        
        while len(queue) > 0:
            num, idx = queue.popleft()
            idx += 1
            
            if idx < len(numbers):
                queue.append([numbers[idx] + num, idx])
                queue.append([-numbers[idx] + num, idx])
            elif num == target: 
                nonlocal result
                result += 1
        
    bfs()
    return result