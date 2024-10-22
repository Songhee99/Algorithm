import sys
from math import sqrt

n = int(sys.stdin.readline().strip())
nList = list(map(int, sys.stdin.readline().strip().split()))
count = 0

for i in nList:
    if i == 1: continue
    elif i < 30:
        if (i == 2 or i == 3 or i == 5 or i == 7 or i == 11 or i == 13 or i == 17 or i == 19 or i == 23 or i == 29): count += 1
    else:
        sqrtI = int(sqrt(i))
        prime = True
        for j in range(2, sqrtI + 1):
            if i % j == 0:
                prime = False
                break
        if prime: count += 1

print(count)
