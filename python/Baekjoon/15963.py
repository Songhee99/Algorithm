import sys

numList = sys.stdin.readline().strip().split()
print(1 if numList[0] == numList[1] else 0)