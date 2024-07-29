def solution(a, b, n):
    def changeCola(a, b, n, totalChanges):
        newN = (n // a) * b
        totalChanges += newN
        n = (n % a) + newN
        return n, totalChanges
        
    totalChanges = 0
    while (n >= a):
        n, totalChanges = changeCola(a, b, n, totalChanges)

    return totalChanges