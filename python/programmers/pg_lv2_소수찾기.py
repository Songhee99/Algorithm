from itertools import permutations
import math

def solution(numbers):
    numbersList = [i for i in numbers]
    newNums = []
    newNumList = []
    result = 0
    
    for i in range(len(numbers)):
        combinationList = permutations(numbersList, i + 1)
        for j in combinationList:
            newNums.append(j)
    
    for num in newNums:
        newNumList.append(int("".join(num)))  

    newNumsSet = set(newNumList)
    print(newNumsSet)
    
    for i in newNumsSet:
        if i == 0 or i == 1: continue
        sqrtNum = int(math.sqrt(i))
        count = 0
        prime = True
        
        for j in range(2, sqrtNum + 1):
            if i % j == 0: 
                prime = not prime
                break
        
        if prime == True: result += 1
        
    return result
