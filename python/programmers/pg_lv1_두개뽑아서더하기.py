from itertools import combinations

def solution(numbers):
    twoNums = list(combinations(numbers, 2))
    result = [i[0] + i[1] for i in twoNums]
    
    return sorted(list(set(result)))