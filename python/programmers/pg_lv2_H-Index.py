def solution(citations):
    result = 0
    citations.sort(reverse = True)
    
    for (idx, h) in enumerate(citations):
        if h < (idx + 1): return result
        result += 1

    return result