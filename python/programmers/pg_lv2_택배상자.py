def solution(order):
    n = len(order)
    count = 0
    stack = []
    idx = 0
    
    for i in range(1, n + 1):
        if i == order[idx]: 
            count += 1
            idx += 1
        else:
            while stack and stack[-1] == order[idx]:
                stack.pop()
                count += 1
                idx += 1
            stack.append(i)
            
    while stack and stack[-1] == order[idx]:
        stack.pop()
        count += 1
        idx += 1
        
    return count