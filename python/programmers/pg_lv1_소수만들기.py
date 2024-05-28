from itertools import combinations

def solution(nums):
    combList = list(combinations(nums, 3))
    combSum = [sum(i) for i in combList]
    count = 0
    
    for i in combSum:
        prime = True
        for j in range(2, i // 2 + 1):
            if i % j == 0: 
                prime = False
                break
        if prime == True: count += 1
        
    return count