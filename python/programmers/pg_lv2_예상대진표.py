import math

def solution(n,a,b):
    count = 0
    
    while a != b:
        a = math.ceil(a / 2)
        b = math.ceil(b / 2)
        count += 1
    
    return count