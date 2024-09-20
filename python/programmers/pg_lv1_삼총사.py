def solution(number):
    n = len(number)
    result = 0
    
    for i in range(n - 2):
        sum = number[i]
        for j in range(i + 1, n - 1):
            sum += number[j]
            for k in range(j + 1, n):
                if sum + number[k] == 0: result += 1
            sum -= number[j]
            
    return result