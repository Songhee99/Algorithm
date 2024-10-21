import sys

n = int(sys.stdin.readline().strip())
nList = list(map(int, sys.stdin.readline().strip().split()))
if n == 1:
    print(nList[0] * nList[0])
    sys.exit()

nList.sort()
print(nList[0] * nList[-1])