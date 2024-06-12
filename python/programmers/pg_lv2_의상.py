from functools import reduce

def solution(clothes):
    closet = dict()
    for item, kind in clothes:
        if kind in closet: closet[kind] += 1
        else: closet[kind] = 1
        
    itemNums = list(closet.values())
    result = reduce(lambda a, b: a * (b + 1), itemNums, 1) - 1
    return result