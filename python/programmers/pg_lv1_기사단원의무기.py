import math

def solution(number, limit, power):
    result = 0
    
    for i in range(1, number + 1):
        sqrtNum = int(math.sqrt(i))
        count = 0
        for j in range(1, sqrtNum + 1):
            if i % j == 0:
                if j == sqrtNum and j * j == i: count += 1
                else: count += 2
        
        result += count if count <= limit else power
    
    return result