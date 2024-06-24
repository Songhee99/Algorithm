def solution(X, Y):
    result = ""
    
    for i in range(9, -1, -1):
        i = str(i)
        xCount = X.count(i)
        yCount = Y.count(i)
        
        if xCount != 0 and yCount != 0:
            totalCount = min(xCount, yCount)
            result += i * totalCount

    if len(result) == 0: return "-1"
    elif set(result) == {"0"}: return "0"
    else: return result
