def solution(n):
    oneCount = bin(n)[2:].count("1")
    
    while True:
        n = n + 1
        if bin(n)[2:].count("1") == oneCount:
            return n