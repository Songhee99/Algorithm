def solution(a, b):
    days = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"]
    
    if a == 1: return days[b % 7]
    elif a == 2: return days[(31 + b) % 7]

    totalCount = -1
    if a > 8: 
        totalCount += 214
        a -= 7
    count30 = (a - 1) // 2
    count31 = (a - 1) % 2
    totalCount += (count30 * 30 + count30 * 31) + count31 * 31 + b
    
    return days[totalCount % 7]