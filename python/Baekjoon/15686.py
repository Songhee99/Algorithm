import sys
from itertools import combinations

n, m = map(int, sys.stdin.readline().strip().split())
homeList = []
chickenList = []
for i in range(n):
    line = sys.stdin.readline().strip().split()

    for (j, v) in enumerate(line):
        if v == "1": homeList.append([i, j])
        elif v == "2": chickenList.append([i, j])

distance = []

for (i, j) in homeList:
    curDist = []
    for (y, x) in chickenList:
        curDist.append(abs(y - i) + abs(j - x))
    distance.append(curDist)

minDist = float("inf")
combList = list(combinations([i for i in range(len(chickenList))], m))

for comb in combList:
    sum = 0
    for i in range(len(homeList)):
        minNum = 101
        for num in comb:
            minNum = min(distance[i][num], minNum)
        sum += minNum
    minDist = min(minDist, sum)

print(minDist)