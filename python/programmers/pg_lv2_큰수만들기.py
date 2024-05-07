def solution(number, k):
    stack = []
    deleteCount = 0
    
    for idx, i in enumerate(number):
        while len(stack) != 0 and stack[-1] < int(i) and deleteCount < k:
            stack.pop()
            deleteCount += 1
            
        stack.append(int(i))
        
        if deleteCount == k: 
            return "".join(map(str, stack)) + number[idx + 1:] if len(stack) != 0 else number[idx + 1:]
        
    remainK = k - deleteCount
    return number[:-remainK]
