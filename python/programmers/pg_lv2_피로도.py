from itertools import permutations

def solution(k, dungeons):
    result = 0
    dungeonsLen = len(dungeons)
    dungeonsList = list(permutations(dungeons, dungeonsLen))
    
    for i in dungeonsList:
        curK = k
        tmpResult = 0
        for (minimum, consume) in i:
            if curK < minimum: break
            else: 
                tmpResult += 1
                curK -= consume
        result = max(result, tmpResult)
        if result == dungeonsLen: break
    return result
            
    