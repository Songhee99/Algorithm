def solution(s):
    sList = list(s)
    alpDict = dict()
    result = []
    
    for (idx, i) in enumerate(sList):
        if i in alpDict: 
            alpIdx = alpDict.get(i)
            result.append(idx - alpIdx)
        else: result.append(-1)
        alpDict[i] = idx
        
    return result