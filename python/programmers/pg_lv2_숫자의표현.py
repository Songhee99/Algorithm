def solution(n):
    if n == 1 or n == 2: return 1
    
    totalSum = 1
    start = 1
    end = 2
    count = 1
    
    while end <= n and start < end:
        if totalSum <= n:
            if totalSum == n: count += 1
            totalSum += end
            end += 1
        else:
            totalSum -= start
            start += 1
            
    return count