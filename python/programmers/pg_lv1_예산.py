def solution(d, budget):
    d.sort()
    priceSum = 0
    count = 0
    
    for i in d:
        priceSum += i
        count += 1
        if priceSum > budget: return count - 1
        elif priceSum == budget: return count
    
    return count