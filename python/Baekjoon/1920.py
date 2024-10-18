import sys

n = int(sys.stdin.readline().strip())
nList = list(map(str, sys.stdin.readline().strip().split()))
nDict = dict()
for i in nList:
    nDict[i] = "1"
m = int(sys.stdin.readline().strip())
mList = [nDict.get(i, "0") for i in (list((map(str, sys.stdin.readline().strip().split()))))]

print("\n".join(mList))