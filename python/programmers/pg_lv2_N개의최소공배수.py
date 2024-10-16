from math import gcd

def solution(arr):
    result = arr[0]
    for i in arr[1:]:
        gcdValue = gcd(result, i)
        result = result * i // gcdValue
        
    return result