def solution(absolutes, signs):
    n = len(signs)
    result = 0
    
    for i in range(n):
        num = absolutes[i]
        if signs[i] == False: num = -num
        result += num
        
    return result