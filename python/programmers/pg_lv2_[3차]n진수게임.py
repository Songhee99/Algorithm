def solution(n, t, m, p):
    result = ""
    numStr = "0"
    start = 1
    minLen = m * (t - 1) + p
    
    digits = "0123456789ABCDEF"
    def changeNum(num):
        nNum = ""

        while num > 0:
            nNum = digits[num % n] + nNum
            num //= n
        return nNum

    while len(numStr) < minLen:
        numStr += changeNum(start)
        start += 1
    
    tubeTurn = p - 1
    while len(result) < t:
        result += numStr[tubeTurn]
        tubeTurn += m
    
    return result