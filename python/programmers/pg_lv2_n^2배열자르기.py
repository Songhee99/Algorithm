def solution(n, left, right):
    result = []
    startPrev = left // n
    startNext = left % n
    endPrev = right // n
    endNext = right % n
    
    if startPrev == endPrev:
        sameNum = startPrev + 1
        for k in range(startNext, endNext + 1):
            if k < sameNum: result.append(sameNum)
            else: result.append(k + 1)
        return result
    
    for i in range(startPrev, endPrev + 1):
        if i == startPrev:
            sameNum = startPrev + 1
            for j in range(startNext, n):
                if j < sameNum: result.append(sameNum)
                else: result.append(j + 1)
                
        elif i == endPrev:
            sameNum = endPrev + 1
            for j in range(0, endNext + 1):
                if j < sameNum: result.append(sameNum)
                else: result.append(j + 1)
                
        else: 
            sameNum = i + 1
            for j in range(0, n):
                if j < sameNum: result.append(sameNum)
                else: result.append(j + 1)
                
    return result