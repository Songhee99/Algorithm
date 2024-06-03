def solution(s):
    result = 0
    while True:
        if len(s) <= 0: return result
        
        x = s[0]
        xCount = 0
        notXCount = 0
        
        for idx, i in enumerate(s):
            if i == x: xCount += 1
            else: notXCount += 1
            
            if xCount == notXCount:
                result += 1
                s = s[idx+1:]
                break
            
            if idx == len(s) - 1: 
                result += 1
                return result