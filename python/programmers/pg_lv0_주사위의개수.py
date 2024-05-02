def solution(box, n):
    result = 1
    for i in box:
        result *= i // n
        
    return result