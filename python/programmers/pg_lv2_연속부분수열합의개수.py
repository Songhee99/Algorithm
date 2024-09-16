def solution(elements):
    eleLen = len(elements)
    newEles = elements + elements[0:eleLen-1]
    numDict = set()
    
    for i in range(eleLen):
        curSum = 0
        for j in range(eleLen - 1):
            curSum += newEles[i + j]
            numDict.add(curSum)
            
    numDict.add(sum(elements))

    return len(numDict)