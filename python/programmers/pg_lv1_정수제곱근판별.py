def solution(n):
    sqrtNum = n**0.5
    if sqrtNum == int(sqrtNum): return (sqrtNum+1)**2
    else: return -1