def solution(prices):
    n = len(prices)
    result = [0] * n
    stack = []
    
    for i in range(n):
        while stack and stack[-1][0] > prices[i]:
            lastNum, lastIdx = stack.pop()
            result[lastIdx] = i - lastIdx
        stack.append([prices[i], i])

    for (num, idx) in stack:
        result[idx] = (n - 1) - idx
    
    return result