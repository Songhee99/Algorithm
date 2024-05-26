def solution(N, stages):
    clearMap = {
        0: 0
    }
    failDict = dict()
    
    for i in stages:
        if i in clearMap: clearMap[i] += 1
        else: clearMap[i] = 1

    totalPeople = len(stages)
    for j in range(1, N+1):
        if j not in clearMap: 
            failDict[j] = 0
            continue
        stay = clearMap[j]
        failRate = stay / totalPeople
        failDict[j] = failRate
        totalPeople -= stay
    
    failList = list(failDict.items())
    failList.sort(key = lambda x: x[1], reverse = True)
    
    return [i[0] for i in failList]