def solution(n, times):
    start = 0
    end = max(times) * n

    while start <= end:
        mid = (start + end) // 2
        count = 0
        
        for i in times:
            count += (mid // i)
            
        if count < n: start = mid + 1
        else: end = mid - 1
    
    return start