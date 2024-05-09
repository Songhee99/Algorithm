def solution(n, lost, reserve):
    lost.sort()
    reserve.sort()
    
    for i in lost[:]:
        if i in reserve:
            lost.remove(i)
            reserve.remove(i)
    
    if len(reserve) == 0: return n - len(lost)
    if len(lost) == 0: return n
    
    for i in reserve:
        if (i - 1) in lost: lost.remove(i - 1)
        elif (i + 1) in lost: lost.remove(i + 1)
        
        if len(lost) == 0: return n
    
    return n - len(lost)
        