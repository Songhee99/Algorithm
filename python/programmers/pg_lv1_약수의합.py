from math import sqrt

def solution(n):
    if n < 2: return n
    
    totalSum = 0
    sqrtNum = int(sqrt(n))

    for i in range(1, sqrtNum + 1):
        if n % i == 0:
            partner = n // i
            totalSum += i if i == partner else (i + partner)
            
    return totalSum