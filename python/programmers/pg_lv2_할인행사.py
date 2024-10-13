def solution(want, number, discount):
    n = len(discount)
    wantDict = dict()
    for (idx, i) in enumerate(want):
        wantDict[i] = idx
    
    start = 0
    end = 0
    count = 0
    
    while True:
        while end < 10:
            if discount[end] in wantDict: number[wantDict.get(discount[end])] -= 1
            end += 1
            
        if len(set(number)) == 1 and 0 in set(number): count += 1
        
        if end >= n: break
        
        if discount[end] in wantDict: number[wantDict.get(discount[end])] -= 1
        end += 1
        
        if discount[start] in wantDict: number[wantDict.get(discount[start])] += 1
        start += 1
        
    return count