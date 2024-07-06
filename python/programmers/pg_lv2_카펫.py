def solution(brown, yellow):
    k = (brown // 2) - 2
    
    for i in range(1, k):
        n, m = (k - i), i
        
        if n * m == yellow: return [n + 2, m + 2]
