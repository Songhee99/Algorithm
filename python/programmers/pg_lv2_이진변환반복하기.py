def solution(s):
    if len(s) == 1: return [0, 0]

    changeCount = 0
    zeroCount = 0
    
    while len(s) != 1:
        newSLen = len(s.replace("0", ""))
        zeroCount += (len(s) - newSLen)
        changeCount += 1
        
        if newSLen != 1: s = str(bin(newSLen)[2:])
        else: return [changeCount, zeroCount]